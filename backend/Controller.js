const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const { referenceGenrerator, initiateTransaction, verifyTransaction } = require("./flutterwaveService");
const SiteText = require("./Model");
const Payment = require("./PaymentModel");
const User = require("./UserModel")
const path = require("path")

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET)
        res.set('Access-Control-Allow-Origin', '*');
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
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
        siteText: newText
    })
})

const getSiteText = asyncHandler(async (req, res) => {
    const siteText = await SiteText.find()
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
        siteText: siteText[0]
    })
})


const createTransaction = asyncHandler(async(req, res, next) => {
    let user  =  null;
    const { fullName, phoneNum, email} = req.body
    const existingUser = await User.findOne({email : email})
    if(existingUser) {
        user = existingUser
    }else {
        const newUser  = await User.create({
            fullName : fullName,
            
            phoneNum : phoneNum,
            email : email
        })
        user = newUser
    }

    if(!user) {
        res.status(500)
        throw new Error("Could not create User")
    }

    const {price, plan} = req.body
    const reference = referenceGenrerator()
    const payload  = {
        "tx_ref":reference,
        "amount": price,
        "currency":"NGN",
        "redirect_url":"https://gloed-server.herokuapp.com/api/transaction/confirm",
        "payment_options":"bank,card",
        "meta":{
           "consumer_id":user._id,
           "consumer_mac":"92a3-912ba-1192a"
        },
        "customer":{
           "email": user.email,
           "phone_number": user.phoneNum,
           "name": user.fullName
        },
        "customizations":{
           "title":`Payment for GLOED Training`,
           "description": `Payment for Gloed ${plan}`,
           "logo":"https://gloed.co/logo.png"
        }
    }
    const newTransaction = new Payment({
        user_id : user._id,
        tx_ref : reference,
        status : "initialised"
    })

    await newTransaction.save()

    const response = await  initiateTransaction(payload)
    //console.log(newTransaction)
   res.json({response})
})

const payToFlutterwave = asyncHandler(async (req, res) => {
    const user = req.user
    const {price, plan} = req.body
    const reference = referenceGenrerator()
     const payload  = {
        "tx_ref":reference,
        "amount": price,
        "currency":"NGN",
        "redirect_url":"https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
        "payment_options":"bank,card",
        "meta":{
           "consumer_id":user._id,
           "consumer_mac":"92a3-912ba-1192a"
        },
        "customer":{
           "email": user.email,
           "phonenumber": user.phoneNum,
           "name": user.fullName
        },
        "customizations":{
           "title":`Payment for GLOED Training`,
           "description": `Payment for Gloed ${plan}`,
           "logo":"https://gloed.co/logo.png"
        }
     }
    const response = await  initiateTransaction(payload)
    //console.log(response)
    res.json({response})
})

const  addUser = asyncHandler(async(req, res) => {
    let user  =  null;
    const { fullName, phoneNum, email} = req.body
    const existingUser = await User.findOne({email : email})
    if(existingUser) {
        user = existingUser
    }else {
        const newUser  = await User.create({
            fullName : fullName,
            phoneNum : phoneNum,
            email : email
        })
        user = newUser
    }

    if(!user) {
        res.status(500)
        throw new Error("Could not create User")
    }

    res.send(user)
}) 

const confirmUser = asyncHandler( async(req, res) => {
    const {status , tx_ref , transaction_id } = req.query
    //console.log(transaction_id)
    const activeTransaction = await Payment.findOne({
        tx_ref : tx_ref,
        status : "initialised"
    })
    //console.log(activeTransaction)
    if(!activeTransaction) {
        res.status(500)
        throw new Error("Invalid or Completed transaction")
    }
    const response = await verifyTransaction(transaction_id)
    const paymentData = {
        ...response.data,
        status : response.status
    } 
    //console.log(paymentData)
    await activeTransaction.updateOne({...paymentData}, {returnOriginal : false})
    const user_id = activeTransaction.user_id 
    console.log(activeTransaction)
    const activeUser = await User.findByIdAndUpdate(user_id, {
        registeredPlan: activeTransaction.charged_amount
    }, {returnOriginal : false})
    //console.log(activeUser)
    res.sendFile(path.join(__dirname, "./payment-success.html"))
})

module.exports = {
    loginUser,
    editSiteText,
    getSiteText,
    createTransaction,
    addUser,
    confirmUser,
    payToFlutterwave
}   