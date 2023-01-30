import express from 'express';

//initializing the express var
const app = express();
app.use(express.json());

app.post('/hello', (req, res) => {
  console.log(req.body);
  res.send(`Hi ${req.body.name} !`);
});

app.listen(8000, () => {
  console.log('All good');
});
