import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isemail.js";

const Student = mongoose.model(
  "Student",
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      required: true,
      validate: {
        validator: (name) => name.length > 3,
        message: "Username must be at least 3 characters",
      },
    },
    email: {
      type: String,
      validate: {
        validator: (value) => isEmail,
        messagge: "Email is not formatted correctly",
      },
    },
    language: {
      type: [String]
    }
    ,
    gender: {
        //hashed/encrypted password
        type: String,
        enum: {
          value: ['male','femal'],
          message: '{value} is not supported'
        }

    },
    phonenumber: {
        type: String,
        required: true,
        validate:{
          validator: (value)=>value.length>5 && value.length<11,
          message: 'Phone number must be at least 5 characters, max: 10'
        }
    },
    address: {
        type: String,
        required: false,
        
    },
  }
  ,{
    autoCreate:false,
    autoIndex:true,
  }

  )
);


export default Student;