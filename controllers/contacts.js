const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const contactsModel = require("../models/contacts");
const bodyParser = require("body-parser");
const urlEncodedMid = bodyParser.urlencoded({
  extended: true
});
const JSONParsermid = bodyParser.json();

//1st API "ADD NEW CONTACT"...
router.post("/addContact",JSONParsermid,function (req, resp) {
      contactsModel.addContact(req.body)
       .then((contact)=>resp.send({
             statusCode : 200,
             message : "Contact added successfuly.",
             data : contact
         }))
       .catch((error)=>resp.send(error));
      }
)

module.exports = router;
