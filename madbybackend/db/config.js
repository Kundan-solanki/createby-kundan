const mongoose = require('mongoose')

let url = 'mongodb+srv://solankikundan897:kundan%40123@cluster0.c3yel.mongodb.net/ors'
// mongoose.connect('mongodb://localhost:27017/text').then(()=>console.log("connection"))
mongoose.connect(url).then(()=>console.log("connection"))

.then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



//   yha image ka bna ga
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/e-com').then(()=>console.log("connection"))

// .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });