const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bismillah!.. Its start of Backend for Foodi Project');
});
  
// MongoDB configuration

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://moalizilani:${process.env.DB_PASSWORD}@cluster0.h85cu8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
