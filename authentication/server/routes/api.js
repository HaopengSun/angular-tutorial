const express = require('express')
const router = express.Router()

require('dotenv').config()

const { MongoClient } = require('mongodb');

const user = process.env.DB_USERNAME
const pass = process.env.DB_PASS

const uri = `mongodb+srv://${user}:${pass}@cluster0.burfe.mongodb.net/authentication?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if (err) {
    console.log('error: ', err)
  } else {
    console.log('connect to mongodb')
    const collection = client.db("authentication").collection("users");
    // perform actions on the collection object
  }
  client.close();
});

router.get('/', (req, res) => {
  res.send('from API folder')
})

module.exports = router;