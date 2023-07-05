const axios = require('axios');
const yelpController = {};

const fetchInfo = {};

const BEARER_TOKEN2 =
  'CuFmwamx8ZGyAJq4-jmFkFSEo-yld8-BzkNXX8qLVHn5NTv9LUrq2lB13q5LhS9hKBdDGrB2Xcogn6e1PPR1s51YazYpOE9re3-PrcKv6us-stSyvzNhW1tVLWufZHYx';

const BEARER_TOKEN3 =
  '3fL-Z1zOIZnAWPYAVo462Sbf4R9ODxQ0CQXTW2KXAFRQeLuHyX38jrBGDIeplBuy04evgJvqVMj3zUhR1mFN2WzaxnyVRwvwboqceelX108pa3gL2jFOoyTXnj-fZHYx';

// dummy zipCode

const location = 20912; //make default zip to be user's zipcode saved in db

// config file for fetching from yelp
// use the limit to adjust the number of restaurants displayed
// you can also change the term to another one to get any business
fetchInfo.config = {
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN3}`,
    Origin: 'localhost',
    withCredentials: true,
  },
  params: {
    term: 'restaurants',
    location: location,
    radius: 1609,
    limit: 5, //this may be what we change to restrict options on page
  },
};

yelpController.getData = (req, res, next) => {
  axios
    .get('https://api.yelp.com/v3/businesses/search', {...fetchInfo.config,}) //location:req query})
    .then((response) => {
      res.locals.rawData = response.data;
      return next();
    })
    .catch((error) => {
      //   console.log(err);
      return next({
        log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
        status: error.status || 400,
      });
    });
};

yelpController.searchData = (req, res, next) => {
  console.log('inside search data controller')
  // console.log('fetchInfoConfig AFTER',{...fetchInfo.config, location: req.query.location, term: req.query.term})
  console.log('req qry:', req.query)
  const {  params} = fetchInfo.config;
  params.location = req.query.location;
  params.term = req.query.term;
  console.log('config', fetchInfo.config);
  console.log('params', params);
  //add terms later
  axios
    .get('https://api.yelp.com/v3/businesses/search', {...fetchInfo.config}) //location://req params/req query})
    .then((response) => {
      res.locals.rawData = response.data;
      return next();
    })
    .catch((error) => {
      //   console.log(err);
      return next({
        log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
        status: error.status || 400,
      });
    });
};

module.exports = yelpController;
