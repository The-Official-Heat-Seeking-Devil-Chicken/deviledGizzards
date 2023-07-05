/**
 * @jest-environment node
 */

const mongoose = require('mongoose');
const { connectDB, dropDB, dropCollections } = require('./mock_db/setuptestdb');
const User = require('../server/models/userModel');

// import createUser and getUser functionality from userController middleware
const {
  createUser,
  getUser,
} = require('../server/controllers/userController.js');

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
    const newUser = await User(validUser);
    await newUser.save();
    expect(newUser._id).toBeDefined();
    expect(newUser.item).toBe(validUser.item);
    expect(newUser.completed).toBe(validUser.completed);
  });
  it('should fail for usernames who are not in the db', async () => {
    let invalidUser = {
      first_name: 'Angus',
      last_name: 'McLovin',
      password: 'password',
      username: 'user123',
      zipcode: '12345',
    };
    const response = await User(invalidUser);
  });
});

// UserController tests
describe('UserController.createUser', () => {
  it('should create a User item successfully', async () => {
    // init variables res and req
    let isError = false;

    //
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

    expect(isError).toEqual(false);
    expect(res.locals.newUser._id).toBeDefined();
    expect(doc._id).toBeDefined();

    // const newUser = await User(validUser);
    // await newUser.save();
    // expect(newUser.item).toBe(validUser.item);
    // expect(newUser.completed).toBe(validUser.completed);
  });

  it('should fail for usernames who are not in the db', async () => {
    let invalidUser = {
      first_name: 'Angus',
      last_name: 'McLovin',
      password: ['I', 'am an array'],
      username: 'user123',
      zipcode: '12345',
    };
    const response = await createUser(invalidUser);
    expect(response).toBeInstanceOf(Error);
  });
});

describe('UserController.createUser', () => {
  it('should create a User item successfully', async () => {});
});
