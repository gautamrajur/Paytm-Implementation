const express = require('express')
const { Account } = require('../db')
const { authMiddleware } = require('../middleware')

const router = express.Router()

router.get('/balance', authMiddleware, async (req, res) => {
    
   const account = await Account.findById({
        userId: req.userId
    })

    res.status(200).json({
        balance: account.balance
    })
})


module.exports = router