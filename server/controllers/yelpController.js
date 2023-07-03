const axios = require('axios');
const yelpController = {};

const fetchInfo = {};

const BEARER_TOKEN2 =
  'CuFmwamx8ZGyAJq4-jmFkFSEo-yld8-BzkNXX8qLVHn5NTv9LUrq2lB13q5LhS9hKBdDGrB2Xcogn6e1PPR1s51YazYpOE9re3-PrcKv6us-stSyvzNhW1tVLWufZHYx';

// dummy zipCode
const location = 20912;

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
  axios
    .get('https://api.yelp.com/v3/businesses/search', fetchInfo.config)
    .then((response) => {
      res.locals.rawData = response.data;
      return next();
    })
    .catch((error) => {
      //   console.log(err);
      return next({
        log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
        status: err.status || 400,
      });
    });
};

module.exports = yelpController;
