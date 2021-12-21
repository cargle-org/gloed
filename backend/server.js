const express = require('express')
const app = express()
const monngoose = require('mongoose')
const dotenv = require('dotenv')
app.use(express.json())
dotenv.config()

const ConnectDB = async () => {
    const conn = await monngoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    if (conn) {
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } else {
        console.log("Error connecting to db")
    }
}
ConnectDB()

const routes = require("./Routes")
const { notFound, errorHandler } = require('./middleware')

app.get("/", (req, res) => {
    res.send("welcome to gloed")
})

app.use("/", routes)

app.use(notFound, errorHandler)
 
app.listen(process.env.PORT, () => {
    console.log("app listening")
})