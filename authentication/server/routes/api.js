const express = require('express')
const router = express.Router()

const User = require('../models/user')

const mongoose = require('mongoose');

require('dotenv').config()

const user = process.env.DB_USERNAME
const pass = process.env.DB_PASS

const uri = `mongodb+srv://haopengsun:${pass}@cluster0.wmr7y.mongodb.net/authentication?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log('connect to db'))
.catch((err) => console.log(err))

router.get('/', (req, res) => {
  res.send('from API folder')
})

// register API
router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save().then((result) => res.status(200).send(result)).catch((err) => console.log(err));
})

module.exports = router;