import express from 'express';
import { db, connectToDb } from './db.js';

//initializing the express var
const app = express();
app.use(express.json());

app.get('/api/cars/:name', async (req, res) => {
  const { name } = req.params;

  const car = await db.collection('cars').findOne({ name });

  if (car) {
    res.json(car);
  } else {
    res.sendStatus(404);
  }
});

app.get('/api/cars', async (req, res) => {
  //const { name } = req.params;

  const cars = await db.collection('cars').find({}).toArray();
  console.log(cars);
  if (cars) {
    res.json(cars);
  } else {
    res.sendStatus(404);
  }
});

connectToDb(() => {
  console.log('Successfully connected to database!');
  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });
});
