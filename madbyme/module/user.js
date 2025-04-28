const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    name : String , 
    loginId : {type : String, unique : true},
    password : {type : String , require : true},
    age:Number,
    city:String,
    contact:String,

})
module.exports=mongoose.model('user', userSchema)