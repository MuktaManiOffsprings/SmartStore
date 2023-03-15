const mongoClient = require('mongodb').MongoClient;

//const uri = 'mongodb+srv://amrit:amritdhal@cluster0.fwicdfm.mongodb.net/test';
const uri = 'mongodb+srv://pinky:pinky@cluster0.sazhefh.mongodb.net/test';
const db_name = 'SmartStore';
const collection_name = 'Category';

async function add(category) {
    console.log(category);
    console.log('Adding to DB');

    //setup connection to mongodb
    //const client = new mongoClient(uri, { useNewUrlParser: true });
    const client = new mongoClient(uri);
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    client.connect();

    console.log('Processing');
    await collection.insertOne(category);

    client.close();
}

async function getList() {
    console.log('GetList of all Categories');

    //setup connection to mongodb
    const client = new mongoClient(uri);
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    try {
        await client.connect();

        let data = await collection.find({}).toArray();

        console.log('data: ');
        console.log(data);
        console.log('Finished');
        return data;
    }
    catch (err) {
        console.log('Error: ' + err);
    }
    finally {
        client.close();
    }
}

module.exports = {
    add: add,
    getList: getList
};