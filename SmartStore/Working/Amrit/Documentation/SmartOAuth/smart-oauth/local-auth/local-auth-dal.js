const mongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://amrit:amritdhal@cluster0.fwicdfm.mongodb.net/test';
const db_name = 'SmartStore';
const collection_name = 'Credentials';

async function getUserDetails(user) {
    //setup connection to mongodb
    const client = new mongoClient(uri);
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    try {
        await client.connect();
        let query = { name: user.email }
        let data = await collection.find(query).toArray();
        return data;
    }
    catch (err) {
        console.log('Error: ' + err);
    }
    finally {
        client.close();
    }
}

async function updateUserOTP(email, secretKey) {
    const client = new mongoClient(uri);
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    try {
        await client.connect();

        await collection.updateOne(
            { name: email },
            { $set: { otp: secretKey } }
        );
    }
    catch (err) {
        console.log('Error: ' + err);
    }
    finally {
        client.close();
    }
}

module.exports = {
    getUserDetails: getUserDetails,
    updateUserOTP: updateUserOTP
};