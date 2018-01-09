var {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect("mongodb://localhost:27017/ToDoApp",(err,db)=>
{
    if(err)
    {
        return console.log("Unable to connect");
    }
    console.log("Connected to MongoDb");

    db.collection('UserName').findOneAndUpdate(
        {_id: new ObjectID("5a532aba2a82f9364ce8038a")},
       /*
            $set:{
                Name:"abc"
            }

        },*/
        {
            $inc:{
              Age:1
            }

        },
        {
            returnOriginal:false
        }).then((result)=>{
        console.log(result);
});
    db.close();

});