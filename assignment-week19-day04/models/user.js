const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        }
    },
    age:{
        type:Number,
        required:true,
        validate(value){
            if(value<0){
                throw new Error('age must be a positive number!')
            }
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not contain password!')
            }
        }
    }
},{
    timestamps:true
})
const user = mongoose.model('user',userSchema)

module.exports = user