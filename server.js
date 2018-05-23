const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, 'dist')));


app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

app.listen(8080, () => console.log('Example app listening on port 3000!'));
