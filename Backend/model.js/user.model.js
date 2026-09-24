const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type : String,
            required :true,
            minlength :[3,'last name must be at least 3 characters']

        },
         lastname:{
        type :String,
        minlength: [3,'Last name must be at least 3 characters']
    }
    },

    email:{
        type :String,
        require: true,
        unique :true,
        minlength:[5,'Email must be at least 5 characters long '],
    },
    password:{
        type : String,
        required : true,
        sele
    },
    socketId:{

    }
   
})