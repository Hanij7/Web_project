const express = require("express");
const app = express();
const Listing = require("./models/listing.js");




const mongoose = require('mongoose');

main().then(()=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');


}


app.listen(8080,()=>{
    console.log(`the server is listening on port 8080 `)
})

app.get("/testListing", async(req,res)=>{
    let sample = new Listing({
        title : "my new villa",
        description : "by the beach",
        price : 78800000,
        location : " new Delhi",
        country : "India"
    })
     await sample.save();
     console.log("sample is saved");
     res.send("successful");
})


app.get("/",(req,res)=>{
    res.send("hi serever is working");
})