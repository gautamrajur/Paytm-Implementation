const express = requie('express')
const userRouter = require('./user')
const accountRouter = require('./account')


const router = express.Router()

router.use('/user', userRouter)

router.use('/account', accountRouter)

module.exports = router