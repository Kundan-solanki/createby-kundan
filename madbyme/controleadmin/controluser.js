const express = require('express')
const mongoose = require('mongoose')

const user = require('../module/user.js')

const route = express.Router()
route.use(express.json())

route.get('/user', async (req, resp) => {
    console.log("This is body form", req.body)
    try {
        let data = await user.find();
        resp.send(data)
    } catch (err) {
        console.log(err)
        resp.send(err)
    }
})

//  this method is insert data
route.post('/user', async (req, resp) => {
    console.log(req.body, "this is data")
    try {
        let result = await user.insertOne(req.body);
        console.log(result, 'this is post method')
        resp.send({ message: "user cres successfull ", data: result })
    } catch (err) {
        console.log(err, "error to de bhai")
        resp.send(err)

    }
})


// this method using a login user add and remove method
route.post("/login", async (req, resp) => {
    console.log("first", req.body)
    if (req.body.loginId && req.body.password) {
        try {
            const data = await user.findOne(req.body).select("-password")
            console.log("Second :", data)
            if (data === null) {
                console.log("Null :-", data)
                resp.send({ message: "No result found", data })
            }
            else {
                console.log("else only", data)
                resp.send(data)
            }
        } catch (err) {
            console.log("Error in email Api", err)
        }
    } else if (req.body.loginId === undefined) {
        console.log(req.body.loginId, ' ya rha data')
        resp.send({ message: "Enter Email id" })
    } else if (req.body.password === undefined) {
        resp.send({ message: "Enter Password" })
    } else {
        resp.send({ message: "Enter email And Password" })
    }
})

module.exports = route;








