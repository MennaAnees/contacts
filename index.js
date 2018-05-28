const express = require('express')
const server = express()
const fs = require("fs")
const path = require('path')

//connect database..
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/myContacts")

// require all models
fs.readdirSync(path.join(__dirname, "models")).forEach(function (model) {
  require(path.join(__dirname, "models", model))
})

//route to API
var contactsRouter = require("./controllers/contacts")
server.use("/contacts", contactsRouter)


server.listen(3000,function(){
  console.log("start server at 3000....");
})
