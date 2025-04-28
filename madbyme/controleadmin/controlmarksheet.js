const express = require('express')
const marksheet= require('../module/Marksheet.js')
const mongoose = require('mongoose')
const multer = require('multer')
const app = express.Router();
app.use(express.json())


//  maulter imaga uplodase
const upload = multer({
    storage : multer.diskStorage({
        destination : (req , file , cb)=>{
            cb(null , 'upload')
        },
        filename : (req , file , cb)=>{
            cb (null , Date.now() + '-' + file.originalname)
        }
    }),
})
app.use('/marksheet/upload', express.static('upload'))


//   Post method And Image Uplode this method
app.post('/marksheet', upload.single('image'), async (req , resp)=>{
    console.log(resp , 'imge aa rhe ha')
    try{
        let formData = {...req.body}
        formData.image = req.file
        let result = await marksheet(formData)
        result = await result.save()
        resp.send(result)
    } catch(err){
        resp.send(err)
    }
})

// Data is get method show
app.get('/marksheet', async(req , resp)=>{
    console.log("this is creaate server", )
    try{
        let result = await marksheet.find();
        console.log(result , "THis is a try solve dont err")
        resp.status(201).send({message : "Role created successfully", data: result})
    } catch(err){
        console.log(err)
        resp.send("sserver er : ", err)
    }
})

//  this method using a setData in your card
app.get('/marksheet/:_id', async (req , resp)=>{
    console.log("findone api");
    let result = await marksheet.findOne(req.params)
    console.log(result)
    resp.send(result)
})

//  Insert Data This method
app.post('/marksheet', async(req , resp)=>{
    console.log(req.body, "this is body form")
    try{
        let result = await marksheet.insertOne(req.body)

        console.log(result , "THis is marksheet work succed")
    } catch (err){
        console.log(err)
        resp.send("server", err)
    }
})

//  Update THis  method and eidte
app.put('/marksheet/:_id', async(req , resp)=>{
    console.log("THis sis aput"  ,req.params)
    try{
        let result = await marksheet.updateOne(req.params , {$set : req.body})
        resp.status(201).send({message : 'This is a update', data : result})
    } catch(err){
        console.log("first", err)
        
        resp.send('server', err)
    }
})

// remove data this method using 
app.delete('/marksheet/:_id', async(req, resp)=>{
    console.log("THis is adelete", req.params)
    try{
        let result = await marksheet.deleteOne(req.params)
        resp.status(201).send({message : "this is delete", data :result})
    } catch(err){
        console.log("delete", err)
        resp.send("server delte marksheet", err)
    }
})


// Searching Data THis Method
app.get('/marksheet/search/:key', async (rep , resp)=>{
    console.log('search', req.params)
    let isensetive = new RegExp(req.params.key, 'i')
    let result = await marksheet.find({
        $or:[
            {firstName : {$regex : isensetive}}
        ]
    })
    resp.status(201).send(result)
})



module.exports = app;