const express = require('express')
const { loginUser, editSiteText, getSiteText, confirmUser, createTransaction , addUser} = require('./Controller')
const { authMiddleware } = require('./middleware')

router = express.Router()

router.post("/login", loginUser)

router.post("/site-text", editSiteText)

router.get("/site-text", getSiteText)

router.post("/createTransaction", createTransaction)

router.post("/addUser" , addUser)


router.get("/transaction/confirm", confirmUser)
module.exports = router