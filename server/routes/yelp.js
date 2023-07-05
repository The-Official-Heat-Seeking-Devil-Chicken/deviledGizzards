const express = require('express');
const path = require('path');
const router = express.Router();
const yelpController = require('../controllers/yelpController');

router.get('/', yelpController.getData, (req, res) => {
  return res.status(200).json(res.locals.rawData);
});

//using req query here
router.get('/search/', yelpController.searchData, (req, res) => {
  console.log('inside the yelp router');
  //
  return res.status(200).json(res.locals.rawData);
});

module.exports = router;
