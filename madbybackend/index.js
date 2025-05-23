require('./db/config.js')
const express = require('express')

const roles = require("./controleadmin/controlroute.js")
const student = require("./controleadmin/controlstudent.js")
const marksheet = require("./controleadmin/controlmarksheet.js")
const user = require("./controleadmin/controluser.js")

const app = express();
const cors = require("cors");
app.use(cors());
app.options('*', cors()); // enable preflight for all routes

app.get('/', (req, resp) => {
    resp.send("This is index file")
})

app.get('/home', (req, resp) => {
    resp.send("This is index file")
})
app.use('/api', roles)
app.use('/api', student)
app.use('/api', marksheet)
app.use('/api', user)

app.listen(8000)



console.log('succsefull and server create')