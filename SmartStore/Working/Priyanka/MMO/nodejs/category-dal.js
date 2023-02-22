const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const db_name = 'ss';
const collection_name = 'Category';

function add(){
    console.log('inserting');
    const client = new mongoClient(url);
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    client.connect();

    collection.insertOne(category);
    console.log('inserted');
}
 
module.exports = {
  add: add
};