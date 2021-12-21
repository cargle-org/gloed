const mongoose = require('mongoose')

const SiteTextSchema = new mongoose.Schema({
    site : {type : String, required : true},
    data : {type : {} , required : true}
})

const SiteText = mongoose.model("SiteText", SiteTextSchema)

module.exports = SiteText;