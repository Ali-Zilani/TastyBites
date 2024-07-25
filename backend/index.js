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
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { createConnection } = require('mongoose');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.h85cu8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  
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
    await client.connect();
    
    // databses & collections
    const menuCollections = client.db("Foodi-MERN").collection("menus");
    const cartCollections = client.db("Foodi-MERN").collection("cartItems");

    //all menu items operations
    app.get('/menu',async(req,res)=>{
      const result = await menuCollections.find().toArray();
      res.send(result);
    })

    // all cart operation
    //posting cart to db
    app.post('/carts',async(req,res)=>{
      const cartItem = req.body;
      const result = await cartCollections.insertOne(cartItem);
      res.send(result);
    })
    // get carts using email
    app.get('/carts',async(req,res)=>{
      const userEmail = req.query.email;
      const result = await cartCollections.find({email:userEmail}).toArray();
      res.send(result);
    })
    //get specific carts
    app.get('/carts/:id', async(req,res)=>{
      const id = req.params.id ;
      const filter = {_id: new ObjectId(id)};
      const result = await cartCollections.findOne(id);
      res.send(result);
    })
    //delete items from cart
    app.delete('/carts/:id',async(req,res)=>{
      const id = req.params.id ;
      const filter = {_id: new ObjectId(id)};
      const result = await cartCollections.deleteOne(filter);
      res.send(result)
    })
    //update cart quantity
    app.put('/carts/:id', async(req,res)=>{
      const id = req.params.id ;
      const {quantity} = req.body ;
      const filter = {_id: new ObjectId(id)};
      const options =  {upsert:true};

      const updateDoc = {
        $set: {
          quantity: parseInt(quantity,10),
        }
      }

      const result = await cartCollections.updateOne(filter,updateDoc,options);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}  
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
