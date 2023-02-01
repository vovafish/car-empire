import express from 'express';
import { MongoClient } from 'mongodb';

//initializing the express var
const app = express();
app.use(express.json());

app.get(`/api/cars/:name`, async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient(`mongodb://127.0.0.1:27017`);
  await client.connect();

  const db = client.db(`car-empire`);

  const car = await db.collection('cars').findOne({ name });

  if (car) {
    res.json(car);
  } else {
    res.sendStatus(404);
  }

  res.json(car);
});

app.listen(8000, () => {
  console.log('All good');
});
