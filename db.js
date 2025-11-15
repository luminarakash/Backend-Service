const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("analyticsDB");
    console.log("MongoDB connected");
  }
  return db;
}

module.exports = connectDB;
