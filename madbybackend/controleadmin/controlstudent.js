 const express = require("express")

const student = require('../module/student.js')
const mongoose = require('mongoose');
const multer = require('multer');
const route = express.Router();

route.use(express.json())

// this is image uploade in student
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
route.use('/student/upload', express.static('upload'))

// insert data and images
route.post('/student', upload.single('image'), async (req , resp)=>{
    console.log(resp , 'imge aa rhe ha')
    try{
        let formData = {...req.body}
        formData.image = req.file
        let result = await student(formData)
        result = await result.save()
        resp.status(201).send({ message: "all data feach", data: result })
    } catch(err){
        resp.send(err)
    }
})

//  get method using a serching on your api data
route.get("/student", async (req, resp) => {
   try {
      let result = await student.find();
      // result = await result.save( )
      console.log(result, 'this is result  code')
      resp.status(201).send({ message: "student created successfully", data: result });

   } catch (err) {
      console.log(err)
      resp.send(err)
   }
})


// data set on view page this method useing
route.get('/student/:_id', async (req, resp) => {
   console.log('find one api')
   try{
      let result = await student.findOne(req.params)
      console.log(result)
      resp.send(result)

   } catch(err){
      console.log(err)
      resp.send(err)
   }
})



// put method in update in your data
route.put('/student/:_id', async (req, resp) => {
   console.log(req.params)
   try {
      let result = await student.updateOne(req.params, { $set: req.body });

      resp.status(201).send({ message: "This is a update", data: result })

   } catch (err) {
      console.log(err)
      resp.send(err)
   }
})


// remove data In  your page using method
route.delete('/student/:_id', async (req, resp) => {
   console.log("This is delet data student", req.params)
   try {
      let result = await student.deleteOne(req.params)
      console.log(req.params)
      resp.status(201).send({ message: 'THis is delete', data: result })
   } catch (err) {
      console.log("first", err)
      resp.send("serv", err)
   }
})




//   searching api on your page 
route.get('/student/search/:key', async (req, resp) => {
   console.log("search api", req.params)
   let isensetive = new RegExp(req.params.key, 'i')
   let result = await student.find({
      $or: [
         { firstName: { $regex: isensetive } },
      
      ]
   })
   resp.status(201).send(result)
})
module.exports = route;
