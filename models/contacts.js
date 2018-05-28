const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator');
const dateValidator = require('is-valid-date');

// contacts schema
const contacts = new Schema(
{
  email:{
    type:String,
    // required:[true, "Please Enter The EMAIL"],
    validate: {
            validator : (email) => validator.isEmail(email),
            message : "NOT VALID EMAIL."
        }
  },
  mobile:{
    type:String,
    // required:[true, "Please Enter The Mobile Number"],
    validate: {
            validator: (mobile) => validator.isMobilePhone(mobile, 'any'),
            message : "NOT VALID MOBILE NUMBER."
        }

  },
  firstName:{
    type:String,
    // required:[true, "Please Enter The First Name"],
    validate: {
            validator: (firstName) => validator.isAlpha(firstName),
            message : "ONLY ALPHABETICAL ALLOWED."
        }
  },
  lastName:{
    type:String,
    // required:[true, "Please Enter The last Name"]
    validate: {
            validator: (firstName) => validator.isAlpha(firstName),
            message : "ONLY ALPHABETICAL ALLOWED."
        }
  },
  country_code:{
    type:Number
  },
   birthDate: {
      type: Date,
      validate: {
             validator: (birthDate) => dateaValidator(birthDate),
              message : "BAD Date."
          }
  }
});

contacts.statics.addContact = function(contact){
  var contact = new contactsModel({
        email:contact.email,
        mobile:contact.mobile,
        firstName:contact.firstName,
        lastName:contact.lastName,
        userId:contact.userId,
        country_code:contact.country_code,
        birthDate:contact.birthDate
    });
  return contact.save()
}

const contactsModel = mongoose.model("contacts", contacts);
module.exports = contactsModel;
