import express from 'express';

//initializing the express var
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hi!');
});

app.listen(8000, () => {
  console.log('All good');
});
