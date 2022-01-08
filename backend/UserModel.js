const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNum : {
        type : Number,
        required : true
    }, 
    registeredPlan : {
        type : String,
        required : true,
        default : "free"
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User