const express = require('express')
const router = express.Router()

const User = require('../models/user')

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

// register API
router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((error, registerUser) => {
    if(error){
      console.log(error)
    } else {
      res.status(200).send(registerUser)
    }
  })
})

module.exports = router;