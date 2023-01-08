const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
//const db_name = 'ss';
//const collection_name = 'Category';

const db_name = 'SmartStore';
const collection_name = 'Category';

function add(category){
    console.log('inserting');
    const client = new mongoClient(url);
    //const db = client.db(db_name);
    //const collection = db.collection(collection_name);
    //client.connect();
    //collection.insertOne(category);
    //console.log('inserted');

    client.connect()
        .then(() => {
            console.log('Successfully connected to MongoDB server');

            const db = client.db(db_name);
            const collection = db.collection(collection_name);

            collection.insertOne(category)
                .then((result) => {
                    console.log(`Successfully inserted document: ${result.insertedId}`);
                })
                .catch((error) => {
                    console.log("Error Insterting");
                    console.error(error);
                });
        })
        .catch((error) => {
            console.log("Error Connecting");
            console.error(error);
        });

}
 
module.exports = {
  add: add
};