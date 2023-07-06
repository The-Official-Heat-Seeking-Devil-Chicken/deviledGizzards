// declare all packages to be imported
const request = require('supertest');

// initialize our server for testing
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        // return server response to client request
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  xdescribe('/login', () => {
    xdescribe('GET', () => {
      it('responds with 200 status and appropriate response', () => {
        // return server response to client request
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  xdescribe('/signup', () => {
    xdescribe('POST', () => {
      it('responds with 200 status and appropriate response', () => {
        // return server response to client request
        return request(server)
          .get('/signup')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  xdescribe('/yelp', () => {
    xdescribe('GET', () => {
      it('responds with 200 status and appropriate response', () => {
        // return server response to client request
        return (
          request(server)
            // specify get request to /markets
            .get('/yelp')
            // expect content-type application/json
            .expect('Content-Type', /application\/json/)
            // expect status 200
            .expect(200)
        );
      });
    });
  });
  describe('/badroute', () => {
    describe('GET', () => {
      it('responds with 404 status', () => {
        // return server response to client request
        return (
          request(server)
            // specify get request to /badroute
            .get('/badroute')
            // expect status 404
            .expect(404)
        );
      });
    });
  });
});
