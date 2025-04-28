const  mongoose  = require("mongoose")
let adminSchema = new mongoose.Schema({
    name : {type : String, require : true , unique : true},
    discription :  String,
    image : []
})
module.exports = mongoose.model('role', adminSchema)








