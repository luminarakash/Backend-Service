const connectDB = require("./db");

async function consumeQueue() {
  const db = await connectDB();

  setInterval(async () => {
    try {
      // Try picking 1 pending event
      const item = await db.collection("queue").findOneAndUpdate(
        { status: "pending" },
        { $set: { status: "processing" } },
        { returnDocument: "after" }
      );

      // If queue is empty → EXIT (no crash)
      if (!item || !item.value) {
        return; // safe exit
      }

      const payload = item.value.data;
      console.log("Processing:", payload);

      // save actual record
      await db.collection("records").insertOne(payload);

      // remove item from queue
      await db.collection("queue").deleteOne({ _id: item.value._id });

      console.log("Processed and stored.");
    } catch (err) {
      console.error("Consumer Error:", err);
    }
  }, 1000);
}

module.exports = consumeQueue;
