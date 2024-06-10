const express = require("express");
const mainRouter = require('./routes')

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use('/api/v1', mainRouter)
app.get("/", )

app.listen(3000, () => {
    console.log('listening on port 3000')
}) 