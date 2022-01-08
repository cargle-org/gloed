const express = require('express')

const app = express()

app.use(express.static("./build"))

app.get("/*", (req, res ) => {
    res.sendFile("./build/index.html")
})

app.listen(5000, function() {
    console.log("app listening")
})