const MongoClient = require('mongodb').MongoClient;
const connection = require('./hiddenPasswords.js')

MongoClient.connect(connection, 
    {useUnifiedTopology: true},
    (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('blockchain-voting');

    db.createCollection("votersCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
    })
});
