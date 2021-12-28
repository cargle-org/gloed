const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname , "../frontend/build")));

dotenv.config()

const ConnectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
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

app.use("/api", routes)

// app.use('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });
app.use(notFound, errorHandler)

 
app.listen(process.env.PORT, () => {
    console.log("app listening")
})