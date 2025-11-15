const express = require("express");
const enqueue = require("./producer");
const consume = require("./consumer");
const aggregate = require("./aggregates");

const app = express();
app.use(express.json());

app.post("/ingest", async (req, res) => {
  await enqueue(req.body);
  res.json({ message: "Data queued successfully!" });
});

app.get("/analytics", async (req, res) => {
  const result = await aggregate();
  res.json(result);
});

app.listen(3000, () => {
  console.log("Ingestion service running on port 3000");
  consume(); // Queue consumer start
});
