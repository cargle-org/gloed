const mongoose = require("mongoose")

const PaymentSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        default: "initialised"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        rel: "User"
    },
    message: { type: String },
    id: { type: Number },
    tx_ref: { type: String },
    flw_ref: { type: String },
    device_fingerprint: { type: String },
    amount: { type: Number },
    currency: { type: String },
    charged_amount: { type: String },
    app_fee: { type: Number },
    merchant_fee: { type: Number },
    processor_response: { type: String },
    auth_model: { type: String },
    ip: { type: String },
    narration: { type: String },
    status: { type: String },
    payment_type: { type: String },
    created_at: { type: Date },
    account_id: { type: Number },
    amount_settled: { type: Number },
    card: {
        first_6digits: { type: String },
        last_4digits: { type: String },
        issuer: { type: String },
        country: { type: String },
        type: { type: String },
        token: { type: String },
        expiry: { type: String }
    },
    customer: {
        id: { type: Number },
        name: { type: String },
        phone_number: { type: String },
        email: { type: String },
        created_at: { type: Date }
    }

})

const Payment = mongoose.model("Payment", PaymentSchema)

module.exports = Payment;