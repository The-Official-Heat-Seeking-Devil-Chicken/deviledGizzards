const axios = require('axios');
const yelpController = {};
require('dotenv').config();

const fetchInfo = {};

const BEARER_TOKEN2 =
  process.env.BEARER_TOKEN2;

const BEARER_TOKEN3 =
  process.env.BEARER_TOKEN3;


const location = 99999; 

// config file for fetching from yelp
// use the limit to adjust the number of restaurants displayed
// you can also change the term to another one to get any business
fetchInfo.config = {
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN2}`,
    Origin: 'localhost',
    withCredentials: true,
  },
  params: {
    term: 'restaurants',
    location: location,
    radius: 1609,
    limit: 20, 
  },
};

yelpController.getData = (req, res, next) => {
  const {  params } = fetchInfo.config;
  params.location = req.query.location;
  //params.limit = 20;

  axios
    .get('https://api.yelp.com/v3/businesses/search', {...fetchInfo.config,}) 
    .then((response) => {
      res.locals.rawData = response.data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Express error handler caught {err} in yelpController.getData: ${err}`,
        status: err.status || 400,
        message: { err: 'An error occurred' }
      });
    });
};

yelpController.searchData = (req, res, next) => {
  const {  params } = fetchInfo.config;
  params.location = req.query.location;
  params.term = req.query.term;
  params.limit = 5;
  
  axios
    .get('https://api.yelp.com/v3/businesses/search', {...fetchInfo.config}) 
    .then((response) => {
      res.locals.rawData = response.data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Express error handler caught unknown middleware error in yelpController.searchData : ${err}`,
        status: err.status || 400,
        message: { err: 'An error occurred' }
      });
    });
};

module.exports = yelpController;
