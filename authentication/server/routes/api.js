const express = require('express')
const router = express.Router()

const User = require('../models/user')

const mongoose = require('mongoose');

const events = require('./events');
const specialEvents = require('./special')

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
 
router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save().then((result) => res.status(200).send(result)).catch((err) => console.log(err));
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, advance) => {
    if (err) {
      console.log(err)
    } else {
      if (!advance) {
        res.status(401).send("invalid email")
      } else {
        if (advance.password !== userData.password){
          res.status(401).send("invalid password")
        } else {
          res.status(200).send(advance)
        }
      }
    }
  })
})

router.get('/events', (req,res) => {
  res.json(events)
})

router.get('/special', (req,res) => {
  res.json(specialEvents)
})

module.exports = router;