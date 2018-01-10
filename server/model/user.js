var mongoose = require('mongoose');
var user = mongoose.model('User',{

    email:{
           type:String
    }
});
var user1 = new user({
    email:"lanetteam.mno@gmail.com"
});

user1.save().then((doc)=>{
    console.log("saved!");
},(err)=>{
    console.log(err);
});

module.exports = {
    user
};