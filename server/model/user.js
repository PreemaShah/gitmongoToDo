const mongoose = require('mongoose');
const validator = require('validator');

var user = mongoose.model('User',{

    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique:true,
        validate:{
            validator:validator.isEmail,
            message:'{value} is not valid email'
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
    },
    tokens:[{
        access:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        }

    }]
});
/*var user1 = new user({
    email:"lanetteam.mno@gmail.com"
});

user1.save().then((doc)=>{
    console.log("saved!");
},(err)=>{
    console.log(err);
});
*/
module.exports = {
    user
};