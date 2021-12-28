const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const SiteText = require("./Model");

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET)
        res.cookie('token', token, { httpOnly: true });
        console.log(res.cookie)
        res.json({
            user: {
                email: "admin@gloed.co",
                password: "admin"
            },
            token
        })
    } else {
        res.status(401)
        throw new Error("Invalid Email or password")
    }
})

const editSiteText = asyncHandler(async (req, res) => {
    const text = req.body
    const newText = await SiteText.findOneAndUpdate({ site: "gloed.co" }, {
        data: text
    }, { returnOriginal: false })

    res.json({
        siteText: newText
    })
})

const getSiteText = asyncHandler(async (req, res) => {
    const siteText = await SiteText.find()
    res.json({
        siteText: siteText[0]
    })
})

module.exports = {
    loginUser,
    editSiteText,
    getSiteText
}