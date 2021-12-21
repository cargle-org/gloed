const express = require('express')
const { loginUser, editSiteText, getSiteText } = require('./Controller')
const { authMiddleware } = require('./middleware')

router = express.Router()

router.post("/login", loginUser)

router.post("/site-text", authMiddleware, editSiteText)

router.get("/site-text", getSiteText)

module.exports = router