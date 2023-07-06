const User = require('../models/userModel');

const UserController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created user
  createUser(req, res, next) {
    // console.log('------entering create user controller----');
    // console.log('body: ', req.body);
    const { first_name, last_name, password, username, zipcode } = req.body;
    // console.log(typeof firstName, typeof lastName);

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
          log: `Express error handler caught ${err} in userController.createUser`,
          status: 500,
          message: { err: 'An error occurred' },
        });
      });
  },

  // get method for fetching user based off of username
  getUser(req, res, next) {
    const { username, password } = req.body;
    // console.log(req.body, 'logging in');
    User.findOne({ username: username, password: password })
      .then((user) => {
        console.log('user: ',user);
        if (user) {
          res.locals.user = user;
          return next();
        } else {
          return next({
            log: 'Express error handler caught error in userController.getUser', 
            status: 404,
            message: {err: 'User not found'}
          })
          
        }
      })
      .catch((error) => {
        return next({
          log: `Express error handler caught ${error} in userController.getUser`,
          status: 404,
          message: {err: 'An error occurred'}
        })
        
      });
  },
};

module.exports = UserController;
