const mongoose = require('mongoose')

let marksheetSchema = new mongoose.Schema({
    firstName : {type : String , require : true},
    lastName : {type : String , require : true},
    rollNo : {type : Number , require : true, unique : true},
    maths : {type : Number , require : true},
    chemistry : {type : Number , require : true},
})
module.exports = mongoose.model('marksheet', marksheetSchema)