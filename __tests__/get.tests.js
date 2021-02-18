const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { mario_bros_data } = require('../data.js');

it('gets the hom endpoint and checks response', async done => {

    const expectedData = { message: 'Welcome to my mario bros api! Enjoy.'}
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedData);
    done();
});

it('gets the bros endpoint and tests response', async done => {

    const expectedData = { response: mario_bros_data}
    const response = await request.get('/bros');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedData);
    done();
});

it('gets the bros/:name endpoint and tests response', async done => {

    const luigi = {
        name: 'luigi',
        good_guy: true,
        image_url: 'https://www.mariowiki.com/images/b/b7/SMB_Super_Luigi_Sprite.png',
        age: 43,
        color: 'green',
        quote: 'Luigi time!'
    };

    const expectedData = {response: luigi};
    const response = await request.get('/bros/luigi');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedData);
    done();
});