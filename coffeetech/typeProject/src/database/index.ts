import { MongoClient } from "mongodb";

let _db: MongoClient;
export const connectionDB = async () => {
  try {
    if (_db && _db.isConnected()) return;

    const _connect = MongoClient.connect(
      "mongodb://admin:admin@localhost:27017",
      {
        sslValidate: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    _db = await _connect;
  } catch (err) {
    throw err;
  }
};

export const getCollection = async (url: string, collection: string) => {
  return _db.db(url).collection(collection);
};
