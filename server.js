const express = require('express');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static(path.resolve(__dirname, 'dist')));


app.get('*', (request, response) => {
  console.log('request', request.path, request.url);
  response.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

app.listen(PORT, HOST);
console.log('Example app listening on port 8080!');
