const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('from API folder')
})

module.exports = router;