const express = require('express');
const app = express();
const server = require('http').createServer(app);

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/Sanskar', (req, res) => {
  res.send('Hello Sanskar!');
});
app.get('/Kapil', (req, res) => {
  res.send('Hello Kapil!');
});
app.get('/SJ', (req, res) => {
  res.send('Hello SJ!');
});
app.get('/RJ', (req, res) => {
  res.send('Hello RJ!');
});
app.get('/Indore', (req, res) => {
  res.send('Hello Indore, my love!');
});

module.exports = {
  app,
  server,
  start: () => {
    server.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  },
  stop: () => {
    server.close();
  },
};