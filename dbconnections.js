

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mehraguneesh65:pcpodp7Bxpoha1qy@sit725.msnoiho.mongodb.net/?retryWrites=true&w=majority&appName=sit725";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let collection;

async function runDB() {
    try {
        await client.connect();
        collection = client.db().collection('data');
        console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

async function postCard(card) {
    try {
        const result = await collection.insertOne(card);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function getAllCards() {
    try {
        const cats = await collection.find({}).toArray();
        return cats;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    runDB,
    postCard,
    getAllCards
};
