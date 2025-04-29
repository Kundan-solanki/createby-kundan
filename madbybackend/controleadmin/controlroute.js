const express = require('express')
const admin = require('../module/admin.js')
const mongoose = require('mongoose')
const multer = require('multer');
const route = express.Router();
route.use(express.json())


//  image uplodase
const upload = multer({
   storage: multer.diskStorage({
      destination: (req, file, cb) => {
         cb(null, "upload")
      },
      filename: (req, file, cb) => {
         cb(null, Date.now() + "-" + file.originalname)
      }
   }),
})
route.use('/admin/upload', express.static('upload'))


//  insert method se hm image ko v uplode karta ha
route.post('/role', upload.single('image'), async (req, resp) => {
   console.log(resp, 'image aa rhe ha')
   try {
      let formData = { ...req.body }
      formData.image = req.file
      let result = await admin(formData)
      result = await result.save()
      resp.status(201).send({ message: "all data feach", data: result })
   } catch (err) {
      resp.send(err)
   }
})

// get method fatch data show page
route.get("/role", async (req, resp) => {
   console.log(req.body, 'this is body form')
   try {
      let result = await admin.find();
      console.log(result, 'this is result  code')
      resp.status(201).send({ message: "Role created successfully", data: result });
   } catch (err) {
      console.log(err)
      resp.send(err)

   }
})


//  this method data is set In your view card
route.get('/role/:_id', async (req, resp) => {
   console.log("function api", req.params)
   try {
      let result = await admin.findOne(req.params)
      console.log(result)
      resp.send(result)
   } catch (err) {
      console.log(err)
      resp.send(err)

   }
})



// post method In insert Data      
route.post("/role", async (req, resp) => {
   console.log("first ", req.body)
   try {
      let result = await admin.insertOne(req.body)
      console.log(result, 'this is a resylt code')
      resp.send("THis is a seccsefuul")
   } catch (err) {
      console.log(err)
      resp.send('sever', err)
   }
})


// put method And update this data 
route.put("/role/:_id", async (req, resp) => {
   console.log("THis is a put method", req.params)
   try {
      let result = await admin.updateOne(req.params, { $set: req.body });
      resp.status(201).send({ message: "This is a update", data: result })
   } catch (err) {
      console.log("first,", err)
      resp.send('sever', err)

   }
})

// This method is deleted one
route.delete("/role/:_id", async (req, resp) => {
   console.log("THis is a del method", req.params)
   try {
      let result = await admin.deleteOne(req.params);
      console.log(req.params)
      resp.status(201).send({ message: "This is a delte  ho gya", data: result })
   } catch (err) {
      console.log("first,", err)
      resp.send('sever', err)

   }
})


// search bale call karna and set on page
route.get('/role/search/:key', async (req, resp) => {
   let isensetive = new RegExp(req.params.key, 'i')
   let result = await admin.find({
      $or: [
         { name: { $regex: isensetive } }
      ]
   })
   resp.status(201).send(result)
})



module.exports = route;




