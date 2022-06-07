const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jdn0d.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




const run = async () => {
  try {
    await client.connect();
    const loanCollection = client
      .db("Loan-db")
      .collection("Applications");

      app.patch('/info', async(req, res)=>{
        const email = req.query.email;
        console.log(email)
        const data = req.body;
        const filter = {email:email};
        const options = {upsert:true};
        const updatedDoc = {
          $set:{
            firstName:data.firstName,
            lastName:data.lastName,
            age: data.age,
            gender: data.gender,
            about:data.about
          }
        }
        const result = await loanCollection.updateOne(filter, updatedDoc, options);
        res.send(result)
      })
      app.patch('/business', async(req, res)=>{
        const email = req.query.email;
        console.log(email)
        const data = req.body;
        const filter = {email:email};
        const options = {upsert:true};
        const updatedDoc = {
          $set:{
            businessName : data.businessName,
            gstNumber: data.gstNumber,
            businessType: data.businessType,
            address: data.address
          }
        }
        const result = await loanCollection.updateOne(filter, updatedDoc, options);
        res.send(result)
      })
      app.patch('/loan', async(req, res)=>{
        const email = req.query.email;
        console.log(email)
        const data = req.body;
        const filter = {email:email};
        const options = {upsert:true};
        const updatedDoc = {
          $set:{
            firstName:data.firstName,
            lastName:data.lastName,
            age: data.age,
            gender: data.gender,
            about:data.about
          }
        }
        const result = await loanCollection.updateOne(filter, updatedDoc, options);
        res.send(result)
      })
      


  } 

  finally {

  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from Loan app");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
