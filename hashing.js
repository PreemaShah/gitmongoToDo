var {SHA256}=require('crypto-js');
const jwt = require('jsonwebtoken');

var data={
    id:55555555550
};

var token = jwt.sign(data,'xyzabc420');
console.log(`token send ${token}`);
var decoded = jwt.verify(token,'xyzabc420');
console.log(decoded );

//var msg ="Im a valid user";
// var hash=SHA256(msg).toString();

// console.log(`this is a plain text: ${msg}`);
// console.log(`this is a cipher text: ${hash}`);
//
// var data = {
//     id:4
// }
//
// var token=
// {
//     data,
//     hash:SHA256(JSON.stringify(data) + 'unchangedMsg').toString()
// }
// var result1=SHA256(JSON.stringify(data)).toString();
// var result=SHA256(JSON.stringify(data) + 'unchangedMsg').toString();
// if(result1===token.hash)
//     console.log(`this is unchanged text`);
// else{
//     console.log(`this is a changed text`)
// }
