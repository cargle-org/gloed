const dotenv = require("dotenv").config();
const axios = require("axios")
const asyncHandler = require("express-async-handler")
const sdk = require("flutterwave-node-v3")
const moment = require("moment")
const baseUrl = "https://api.flutterwave.com/v3";

const referenceGenrerator = () => {
    const time = moment().format("YYYY-MM-DD hh:mm:ss")
    const rand = Math.floor(Math.random() * Date.now())

    return `FLW|${time.replace(/[\-]|[\s]|[\:]/g, "")}|${rand}`
}

const options = {
    timeout : 1000 * 60,
    headers : {
        "content-type" : "application/json",
        Authorization : `Bearer ${process.env.FLW_SECRET_KEY}`
    }
}

const initiateTransaction = asyncHandler(async (payload) => {
    const response = await axios.post(`${baseUrl}/payments`, payload, options)
    return response.data.data.link;
})

const verifyTransaction = asyncHandler(async(transID) => {
    const response = await axios.get(`${baseUrl}/transactions/${transID}/verify`, options)
    return response.data;
})

module.exports = {
    referenceGenrerator,
    initiateTransaction,
    verifyTransaction
}