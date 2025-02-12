const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors'); //CORS
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const userController = require('./controllers/userController');
const yelpRouter = require('./routes/yelp');

const dbUrl =
  'mongodb+srv://sebastiansarm:1234@cluster0.at2e2ez.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'MeWantFood',
  })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

// handle parsing request body
app.use(cors()); //CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// allows us to store the cookie on our backend
// app.use(cookieParser());

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//YELP API REQUEST
app.use('/yelp', yelpRouter);

// post method for user to db
app.post('/signup', userController.createUser, (req, res) => {
  console.log('--entering post method for route--');
  return res.status(200).json(res.locals.newUser);
});

app.post('/login', userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

// app.use('/dashboard', routenamevar);

//catch all route error handler
app.use('/*', (req, res) => {
  res.sendStatus(404);
});

/**
 * global express error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('Express listening on port 3000');
}); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
