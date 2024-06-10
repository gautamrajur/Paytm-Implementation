const express = require('express')
const { default: mongoose } = require('mongoose')
const { Account } = require('../db')
const { authMiddleware } = require('../middleware')
const { route } = require('./user')

const router = express.Router()

router.get('/balance', authMiddleware, async (req, res) => {
  let account 
  try
  {
    account = await Account.findOne({
        userId: req.userId
    })
    if(!account)
        res.json({
            message: "Could not find user"})
  }catch(e){
    return  res.status(200).json({
        message: "Could not find user 12234"
    })
  }
    res.status(200).json({
        balance: account.balance
    })
})

router.post('/transfer', authMiddleware, async(req, res) => {
    let session, fromAccount, toAccount
    try{

        session = await mongoose.startSession()
        session.startTransaction()
    
        const {amount, to} = req.body
    
        //FETCH the accounts from DB
        fromAccount = await Account.findOne({userId: req.userId}).session(session)
    
        if(!fromAccount || fromAccount.balance < amount) {
            await session.abortTransaction()
            res.status(400).json({
                message: 'Insufficient balance'
            })
        }
    
        toAccount = await Account.findOne({userId: to}).session(session)
    
        if(!toAccount){
            await session.abortTransaction()
            res.status(400).json({
                message: 'Invalid account'
            })
        }
    
        //Perfrom the transfer
        await Account.updateOne({userId: req.userId}, { $inc: {balance: -amount}}).session(session)
        await Account.updateOne({userId: to}, { $inc: {balance: amount}}). session(session)
    
        //Commit the transaction 
        await session.commitTransaction()
    
        res.json({
            message: 'Transfer successful'
        })

    }catch(e){
        await session.abortTransaction()
        res.status(400).json({
            message: 'Transaction failed due to some Internal Server issue  ' + e.message
        })
    }

})


module.exports = router