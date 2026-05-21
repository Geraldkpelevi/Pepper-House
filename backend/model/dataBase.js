const { client } = require("../config/mongodbConnection");

function connectToMongodb(dataBase_name, collection_name) {
  const dbRef = client.db(dataBase_name);
  if (collection_name) {
    return dbRef.collection(collection_name);
  }
  return dbRef;
}

module.exports = { connectToMongodb };
