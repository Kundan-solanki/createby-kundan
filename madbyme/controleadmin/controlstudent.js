const express = require("express")

const student = require('../module/student.js')
const mongoose = require('mongoose');
const multer = require('multer');
const route = express.Router();

route.use(express.json())

// multer using with image uplode
const upload = multer({
   Storage: multer.diskStorage({
      destination: (req, file, cb) => {
         const dir = "uploads";
      },
      filename: (req, file, cb) => {
         cb(null, Date.now() + "-" + file.originalname);
      },
   }),
})
route.use('/students/upload', express.static('upload'))

route.post('/students', upload.single('image'), async (req, resp) => {
   console.log(resp, 'image aa rhe ha')
   try {
      let formData = { ...req.body }
      formData.image = req.file
      let result = await student(formData)
      result = await result.save()
      resp.status(201).send({ message: 'all data featc', data: result })
   } catch (err) {
      console.log(err)
   }
})

//  get method using a serching on your api data
route.get("/students", async (req, resp) => {
   console.log(req.body, 'this is body form')
   try {
      let result = await student.find();
      console.log(result, 'this is result  code')
      resp.status(201).send({ message: "student created successfully", data: result });

   } catch (err) {
      console.log(err)
      resp.send(err)

   }
})


// post method in add your data in user
route.post('/students', async (req, resp) => {
   console.log(req.body)
   try {
      let result = await student.insertOne(req.body);
      console.log(result, "this is post method")
      resp.send({ message: "Role created successfully", data: result });
   } catch (err) {
      console.log(err, "errer bta yarr post ke")
      resp.send(err)
   }
})



// put method in update in your data
route.put('/students/:_id', async (req, resp) => {
   console.log(req.params)
   try {
      let result = await student.updateOne(req.params, { $set: req.body });

      resp.send("THis is update one api appdate", result)

   } catch (err) {
      console.log(err)
      resp.send("THis is update one api craccs")
   }
})


// remove data In  your page using method
route.delete('/students/:_id', async (req, resp) => {
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

// data set on view page this method useing
route.get('/students/:_id', async (req, resp) => {
   console.log('find one api')
   let result = await student.findOne(req.params)
   console.log(result)
   resp.send(result)
})


//   searching api on your page 
route.get('/students/search/:key', async (rep, resp) => {
   console.log("search api", req.params)
   let isensetive = new RegExp(req.params.key, 'i')
   let result = await student.find({
      $or: [
         { firstName: { $regex: isensetive } },
         { lastName: { $regex: isensetive } },
         { emailId: { $regex: isensetive } },
         { password: { $regex: isensetive } },
         { mobileNo: { $regex: isensetive } }
      ]
   })
   resp.status(201).send(result)
})
module.exports = route;
