const mongoose = require("mongoose")

let studentSchema = new mongoose.Schema({
    firstName : {type : String},
    lastName : {type : String },
    emailId :  {type : String, require : true,  unique : true},
    password : {type : String, require : true},
    mobileNo : {type : Number, require : true},
    image : []
})
module.exports = mongoose.model('Students', studentSchema)
