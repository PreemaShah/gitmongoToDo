var mongoose = require('mongoose');
var user = mongoose.model('Users',{

    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});
/*var user1 = new user({
    email:"lanetteam.preema@gmail.com"
});

user1.save().then((doc)=>{
    console.log("saved!");
},(err)=>{
    console.log(err);
});*/

module.exports = {
    user
};