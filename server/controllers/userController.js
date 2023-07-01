const User = require('../models/userModel');

const UserController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created user
  createUser(req, res, next) {
    const { firstName, lastName, password, username, zipcode } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      password,
      username,
      zipcode,
    });

    newUser
      .save()
      .then((savedDoc) => {
        res.locals.newUser = savedDoc;
        return next();
      })
      .catch((error) => {
        next(res.status(400).json({ error: 'error in creating user' }));
      });
  },
  getUser(req, res, next) {
    const { name } = req.params;
    User.findOne({ firstName: name })
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
