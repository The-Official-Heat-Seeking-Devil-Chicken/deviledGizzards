const User = require('../models/userModel');

const UserController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created user
  createUser(req, res, next) {
    // console.log('------entering create user controller----');
    // console.log('body: ', req.body);
    const { first_name, last_name, password, username, zipcode } = req.body;
    // console.log(typeof first_name, typeof last_name);
    // console.log('password:', password);

    const newUser = new User({
      first_name,
      last_name,
      password,
      username,
      zipcode: Number(zipcode),
    });
    // console.log('newUser', newUser);
    newUser
      .save()
      .then((savedDoc) => {
        res.locals.newUser = savedDoc;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'error in creating user',
          status: 500,
          message: {
            err: 'an error occured in createUser controller middleware',
          },
        });
      });
  },
  // get method for fetching user based off of username
  getUser(req, res, next) {
    const { username, password } = req.body;
    // console.log(req.body, 'logging in');
    User.findOne({ username: username, password: password })
      .then((user) => {
        // if doc is found
        if (user) {
          res.locals.user = user;
          return next();
        } else {
          return res.status(400).json({ error: 'user not found' });
        }
      })
      .catch((err) => {
        return res.status(400).json({ error: 'failed to fetch user' });
      });
  },
};

module.exports = UserController;
