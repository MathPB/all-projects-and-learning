const { MongoClient } = require("mongodb");

let _db;
const connectionDB = async () => {
  try {
    const _connect = MongoClient.connect(
      "mongodb://admin:admin@localhost:27017",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    _db = _connect;
  } catch (err) {
    throw err;
  }
};

const getCollection = async (url = "users", collection = "usersTest") => {
  return (await _db).db(url).collection(collection);
};

module.exports = { connectionDB, getCollection };
