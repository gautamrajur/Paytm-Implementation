const express = require('express')
const z = require('zod')
const {authMiddleware} = require('../middleware')
const router = express.Router()
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config')
const { Account, User } = require('../db')



const userDetailsformat = z.object({
    username: z.string().email(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
})

const updateSchema = z.object({
    password: z.string().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional()
})

function userInputValidator(req, res, next) {
    const zodResult = userDetailsformat.safeParse(req.body)
    if(!zodResult.success){
        console.log(zodResult.error)
        res.status(411).send('Invalid inputs in the body')
        return
    }
    next()
}

// User signUp logic
router.post('/signup',userInputValidator, async (req,res) => {

    const {username, password} = req.body
    const userExists = await User.findOne({username,password})
    if(userExists){
        return res.status(411).send('User with Email already exists')
    }
    const newUser = await User.create(req.body)
// Initialize a random initial amount to every new user
    await Account.create({
        userId: newUser._id,
        balance: 1 + Math.random() *10000
    })

    const token = jwt.sign({
        userId: newUser._id
    }, JWT_SECRET)

    res.status(200).json({
        message: "User create successfully",
        token
    })

})
//User sign-in logic
router.post('/signin', async (req,res) => {

    const {username, passsword} = req.body
    const userExists = await User.findOne({username, passsword})

    if(!userExists){
        return res.status(400).json({
            message: "User doesn't exist please sign up and try again"
        })
    }

    const token = jwt.sign({userId: userExists._id}, JWT_SECRET)

    res.status(200).json({
        message: 'sign-in successful',
        token
    })

})

//update the user deatils for an existing user
router.put('/update',authMiddleware, async(req, res) => {
    
    const {success, data} = updateSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: 'Error while updating the info'
        })
    }

    await User.updateOne({
        _id: req.userId
    }, data)

    res.json({
        message: 'User data is successfully updated'
    })
})

//Search for all the users matching the filter
router.get('/bulk', async (req, res) => {

    const filter = req.query.filter || ""

    const users = await User.find({
        $or: [{
                firstname: {
                    '$regex': filter
                }
            },
            {
                lastname: {
                 '$regex': filter
                }
            }]
    })

    res.json({
        users: users.map(user => ({
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                _id: user._id
             } ))
    })

})


module.exports = router