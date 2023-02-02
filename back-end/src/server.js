import express from 'express';
import { db, connectToDb } from './db.js';

//initializing the express var
const app = express();
app.use(express.json());

app.get(`/api/cars/:name`, async (req, res) => {
  const { name } = req.params;

  const car = await db.collection('cars').findOne({ name });

  if (car) {
    res.json(car);
  } else {
    res.sendStatus(404);
  }

  res.json(car);
});

connectToDb(() => {
  app.listen(8000, () => {
    console.log('All good');
  });
});
