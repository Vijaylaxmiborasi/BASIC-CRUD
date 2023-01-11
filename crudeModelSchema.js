const mongoose = require('mongoose')
const crudeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    
    isActive : {
        type : Boolean,
        required : true,
        default : true
    },
})
crudeSchema.set('timestamps',true)
module.exports = mongoose.model('crude', crudeSchema)