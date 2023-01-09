const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://moonmun:Mo0nmunsen@cluster0.hgvhk4t.mongodb.net/test';
const db_name = 'ss';
const collection_name = 'Category';

async function add(category){
    console.log('category');
    const client = new mongoClient(url);
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    client.connect();

    await collection.insertOne(category);
    client.close();
}
 
module.exports = {
  add: add
};