const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { mario_bros_data } = require('../data.js');

it('gets the test endpoint', async done => {

    const expectedData = { message: 'Welcome to my mario bros api! Enjoy'}
    const response = await request.get('/');

    expected(response.status).toBe(200);
    expected(response.body).toEqual(expectedData);
    done();
});