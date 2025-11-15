const connectDB = require("./db");

async function runAggregations() {
  const db = await connectDB();

  const summary = await db.collection("records").aggregate([
    {
      $group: {
        _id: "$type",
        count: { $sum: 1 },
      },
    },
  ]).toArray();

  console.log("Analytics Result:", summary);
}

module.exports = runAggregations;
