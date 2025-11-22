import cors from "cors";
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("zap shift is running");
});

app.listen(port, () => {
  console.log(`zapShift app listening on port ${port}`);
});

const uri =
  "mongodb+srv://zapShift:Fn8YrrXygPxqqXYy@projects.khlwhkd.mongodb.net/?appName=projects";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("zap_shift_db");
    const parcelsCollection = db.collection("parcels");

    // parcel api

    app.get("/parcels", async (req, res) => {});
    app.post("/parcels", async (req, res) => {
      const parcel = req.body;
      const result = await parcelsCollection.insertOne(parcel);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Fn8YrrXygPxqqXYy

// zapShift
