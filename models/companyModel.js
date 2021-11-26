const mongoose = require('mongoose')
let companySchema = new mongoose.Schema({
    companyName: {
        type: String,

        minlength: [5, 'A companyname must have more or equal then 5 characters']
    },
    emailId: String,
    companyCode: {
        type: String,
        unique: true,
        minlength: [5, 'A companycode must have  equal 5 characters']
    },
    strength: Number,
    webSite: String,
    createdAt: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('company', companySchema)
