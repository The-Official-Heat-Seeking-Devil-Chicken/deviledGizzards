/**
 * @jest-environment node
 */

const mongoose = require('mongoose');
const { connectDB, dropDB, dropCollections } = require('./setuptestdb');
const User = require('../../server/models/userModel');

// import createUser and getUser functionality from userController middleware
const {
  createUser,
  getUser,
} = require('../../server/controllers/userController.js');

// before any tests are run, connect to mock db
beforeAll(async () => {
  await connectDB();
});

// after all tests are run, drop database connection
afterAll(async () => {
  await dropDB();
});

// after each individual test is run, drop all collections in the db
afterEach(async () => {
  await dropCollections();
});

// User Model tests make sure that our user model is working correctly, including data validation
describe('User Model', () => {
  it('should create a User item successfully', async () => {
    let validUser = {
      first_name: 'Jiggles',
      last_name: 'McJiggles',
      password: 'password',
      username: 'user123',
      zipcode: '12345',
    };
    const newUser = new User(validUser);
    await newUser.save();
    expect(newUser._id).toBeDefined();
    expect(newUser.item).toBe(validUser.item);
    expect(newUser.completed).toBe(validUser.completed);
  });
  it('should fail for invalidUsers', async () => {
    let invalidUser = {
      // first_name: 123,
      // last_name: ['McLovin'],
      // password: { password: 'fire' },
      // username: 'user123',
      zipcode: 'Angus',
    };
    try {
      const newUser = new User(invalidUser);
      await newUser.save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      // expect(error.errors.completed).toBeDefined();
    }
  });
  it('should fail for User item with fields of wrong type', async () => {
    let invalidUser = {
      item: 'Do the dishes',
      completed: 'False',
    };
    try {
      const newUser = new User(invalidUser);
      await newUser.save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
    }
  });
});

// UserController tests
describe('UserController.createUser', () => {
  it('should create a User item successfully', async () => {
    // init variable isError as false, flag returns true if any value passed into next function, triggering global error handler
    let isError = false;
    // init constants res and req as mock objects that mimic real request and response objects
    const res = { locals: { newUser: {} } };
    const req = {};
    req.body = {
      first_name: 'Jiggles',
      last_name: 'McJiggles',
      password: 'password',
      username: 'user123',
      zipcode: 12345,
    };
    // init const result as output of invoking createUser on req, an empty obj as res, and
    const result = await createUser(req, res, (err = 'not an error') => {
      if (err !== 'not an error') {
        isError = true;
      }
    });
    const doc = await User.findOne({ first_name: 'Jiggles' });

    // these assertions test whether createUser successfully adds a user entry to the database with the correct params
    expect(doc.first_name).toEqual(req.body.first_name);
    expect(doc.last_name).toEqual(req.body.last_name);
    expect(doc.password).toEqual(req.body.password);
    expect(doc.username).toEqual(req.body.username);
    expect(doc.zipcode).toEqual(req.body.zipcode);

    // these assertions test whether createUser successfully passes on the new database entry to next link in middleware chain
    expect(res.locals.newUser.first_name).toEqual(req.body.first_name);
    expect(res.locals.newUser.last_name).toEqual(req.body.last_name);
    expect(res.locals.newUser.password).toEqual(req.body.password);
    expect(res.locals.newUser.username).toEqual(req.body.username);
    expect(res.locals.newUser.zipcode).toEqual(req.body.zipcode);

    // expect this operation to not throw an error
    expect(isError).toEqual(false);

    // expect both data passed on to next link in MW chain and the db entry to have a _id property
    expect(res.locals.newUser._id).toBeDefined();
    expect(doc._id).toBeDefined();
  });
  // Paul
  it('should fail for invalid inputs', async () => {
    // init variables res and req
    let isError = false;
    const res = { locals: { newUser: {} } };
    const req = {};
    req.body = {
      first_name: 'Angus',
      last_name: 'McLovin',
      password: ['not a valid password'],
      username: 'user123',
      zipcode: '12345',
    };
    const result = await createUser(req, res, (err = 'not an error') => {
      if (err !== 'not an error') {
        isError = true;
      }
    });
    const doc = await User.find({ first_name: 'Angus' });
    expect(doc).toHaveLength(0);
    expect(isError).toEqual(true);
  });
});

describe('UserController.getUser', () => {
  it('should fetch a User successfully', async () => {
    let validUser = {
      first_name: 'Jiggles',
      last_name: 'McJiggles',
      password: 'password',
      username: 'user123',
      zipcode: 12345,
    };
    //create and save valid user in db
    const newUser = new User(validUser);
    await newUser.save();
    const req = {
      body: {
        username: 'user123',
        password: 'password',
      },
    };
    const res = { locals: { user: {} } };
    const idk = getUser(req, res, () => {
      return res.locals.user;
    })
    console.log(idk)
    // await setTimeout(() => {
    //   console.log('LINE 148', val);
    //   console.log('LINE 148', res.locals.user);
    // }, 1000);
    // expect(res.locals.user).toBeDefined();
    // expect(res.locals.user.first_name).toEqual(validUser.first_name);
    // expect(res.locals.user.password).toEqual(req.password);
  });
  // these tests are crossed out until getUser is refactored to invoke global error handler in case user is not found
  xit('should invoke global error handler if User does not exist in db', async () => {
    // init variable isError as false, flag returns true if any value passed into next function, triggering global error handler
    let isError = false;
    // init constants res and req as mock objects that mimic real request and response objects
    const res = { locals: {} };
    const req = {
      body: {
        first_name: 'Pedro Francisco',
        last_name: 'De los Angeles Hernandez Gonzalez de la Piedad',
        password: 'password',
        username: 'user123',
        zipcode: 12345,
      },
    };
    // init var mockNext as mock function that updates isError flag to true if global error handler is triggered
    const mockNext = jest.fn((err = 'not an error') => {
      if (err !== 'not an error') {
        isError = true;
      }
    });

    // invoke getUser on mock res and req objects and mock next func
    await getUser(req, res, mockNext);

    // expect this operation to invoke global error handler
    expect(isError).toEqual(true);
  });
  xit('should not store any value into res.locals.user', async () => {
    // init variable isError as false, flag returns true if any value passed into next function, triggering global error handler
    let isError = false;
    // init constants res and req as mock objects that mimic real request and response objects
    const res = { locals: {} };
    const req = {
      body: {
        first_name: 'Pedro Francisco',
        last_name: 'De los Angeles Hernandez Gonzalez de la Piedad',
        password: 'password',
        username: 'user123',
        zipcode: 12345,
      },
    };
    // init var mockNext as mock function that updates isError flag to true if global error handler is triggered
    const mockNext = jest.fn((err = 'not an error') => {
      if (err !== 'not an error') {
        isError = true;
      }
    });
    // invoke getUser on mock res and req objects and mock next func
    await getUser(req, res, mockNext);

    // expect nothing to be passed on to res.locals
    expect(res.locals).toEqual({});
  });
  xit('should return error if username matches but password does not', async () => {
    // init variable isError as false, flag returns true if any value passed into next function, triggering global error handler
    let isError = false;
    // init constants res and req as mock objects that mimic real request and response objects
    const res1 = { locals: {} };
    const req1 = {
      body: {
        first_name: 'Angus',
        last_name: 'McLovin',
        password: 'password',
        username: 'user123',
        zipcode: 12345,
      },
    };
    // init var mockNext as mock function that updates isError flag to true if global error handler is triggered
    const mockNext = jest.fn((err = 'not an error') => {
      if (err !== 'not an error') {
        isError = true;
      }
    });
    // invoke createUser on mock inputs
    await createUser(req1, res1, mockNext);

    // init additional mock objects for call to getUser
    const req2 = {
      body: {
        first_name: 'Angus',
        last_name: 'McLovin',
        password: 'wrongPassword',
        username: 'user123',
        zipcode: 12345,
      },
    };
    const res2 = { locals: {} };
    // invoke getUser on mock res and req objects and mock next func
    await getUser(req2, res2, mockNext);

    // expect this operation to invoke global error handler
    expect(isError).toEqual(true);

    // expect nothing to be passed on to res.locals
    expect(res2.locals).toEqual({});
  });
});
