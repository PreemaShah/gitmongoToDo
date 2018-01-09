var {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect("mongodb://localhost:27017/ToDoApp",(err,db)=>
{
    if(err)
    {
        return console.log("Unable to connect");
    }
    console.log("Connected to MongoDb");

  /*  db.collection('UserName').find({Age:20}).toArray().then((result)=>{
        console.log("Data Fetched");
        console.log(result);
    },(err)=>{
        console.log('unable to fetch userNames',err);
    });
*/

    db.collection('UserName').find({Name:"ramesh"}).count().then((count)=>{
        console.log("Data Fetched");
        console.log(count);
    },(err)=>{
        console.log('unable to fetch userNames',err);
    });

   db.close();

});