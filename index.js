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
