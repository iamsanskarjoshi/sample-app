const request = require('supertest');
const { server, start, stop } = require('./server');

beforeAll(() => {
  start();
});

afterAll(() => {
  stop();
});

describe('API Endpoints', () => {
  it('should return "Hello World!" when GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });

  it('should return "Hello Sanskar!" when GET /Sanskar', async () => {
    const response = await request(server).get('/Sanskar');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello Sanskar!');
  });

  it('should return "Hello Kapil!" when GET /Kapil', async () => {
    const response = await request(server).get('/Kapil');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello Kapil!');
  });

  it('should return "Hello SJ!" when GET /SJ', async () => {
    const response = await request(server).get('/SJ');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello SJ!');
  });

  it('should return "Hello RJ!" when GET /RJ', async () => {
    const response = await request(server).get('/RJ');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello RJ!');
  });

  it('should return "Hello Indore, my love!" when GET /Indore', async () => {
    const response = await request(server).get('/Indore');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello Indore, my love!');
  });
});