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

module.exports = fetchInfo;
