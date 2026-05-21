


const { MongoClient } = require('mongodb');

const MONGODB_URI = "mongodb+srv://Geraldo:Gerald@cluster0.hiq0cwz.mongodb.net/?appName=Cluster0"; 
const client = new MongoClient(MONGODB_URI);

function connectToDatabase() {
  return client.connect()
    .then(() => {
      console.log('Connected to MongoDB');
      return client.db('mydatabase'); 
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
      throw err;
    });
}

module.exports = { connectToDatabase , client };