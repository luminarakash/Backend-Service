const connectDB = require("./db");

async function enqueue(data) {
  const db = await connectDB();
  await db.collection("queue").insertOne({
    data,
    status: "pending",
    createdAt: new Date(),
  });

  console.log("Added to Mongo queue:", data);
}

module.exports = enqueue;
