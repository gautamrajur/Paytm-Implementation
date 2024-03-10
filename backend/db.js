const mongoose = require('mongoose')
const { number } = require('zod')

mongoose.connect("mongodb+srv://reachgautam10:OhGcFegDNj25kIKo@cluster0.602b7mp.mongodb.net/paytm")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlenght: 3,
        maxlenght: 30
    },
    password:{
        type: String,
        required: true,
        minlenght: 6

    },
    firstname:{
        type: String,
        required: true,
        trim: true,
        maxlenght: 30
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        maxlenght: 30
    }
})

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', accountSchema)

module.exports = {
    User,
    Account
}