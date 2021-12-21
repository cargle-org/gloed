const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const notFound = (req, res, next) => {
    const err = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(err)
}

const errorHandler = (err, req, res, next ) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack : err.stack
    })
}

const authMiddleware = asyncHandler(async(req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            const token = req.headers.authorization.split(" ")[1]
            console.log(token)
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded.email
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not Authorized : could not validate token")
        }
    }else{
        res.status(401)
        throw new Error("Not Authorized : token not found")
    }
})

module.exports = {notFound, errorHandler, authMiddleware}