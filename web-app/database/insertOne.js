const MongoClient = require('mongodb').MongoClient;
const connection = require('../../hiddenPasswords.js')

const sampleUser = {
    "First Name" : "David",
    "Last Name"  : "Ornn",
    "Address"    : "119 North 5th Ave",
    "Town" : "Portland",
    "State" : "OR",
    "Drivers License ID" : "H334784933",
    "Age" : "67"
};

MongoClient.connect(connection, 
    {useUnifiedTopology: true},
    (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('blockchain-voting');

    db.collection("votersCollection").insertOne(sampleUser, function(err,res){
        if (err) throw err;
        console.log("1 document inserted");
    });

    db.collection("votersCollection").find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
    });

});
