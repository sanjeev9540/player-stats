import { MongoClient } from "mongodb";

const mongo_uri = process.env.MONGODB_URI;

const options = {};
let clientPromise;

if (!global._mongoClientConnection) {
    const client = new MongoClient(mongo_uri, options);
    global._mongoClientConnection = client.connect();
}

clientPromise = global._mongoClientConnection;

export default clientPromise;