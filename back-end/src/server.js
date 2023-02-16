/*
Importing the express framework to simplify work with the back-end
&
database conncetion
*/
import express from 'express';
import { db, connectToDb } from './db.js';

//initializing the express var
const app = express();
/* This code is used to enable Express to parse incoming request bodies that are in the JSON format. It is used to access the data sent by the client in a POST request. */
app.use(express.json());

/* This code is a route handler for an API endpoint that retrieves a car from a database. It uses the Express framework to handle the request. The code takes the name of the car from the URL parameters, then it queries the database for a car with that name. If it finds one, it sends back the car's data as a JSON response. If no car is found, it sends back an HTTP status code of 404 (Not Found). */
app.get('/api/cars/:name', async (req, res) => {
  const { name } = req.params;

  const car = await db.collection('cars').findOne({ name });

  if (car) {
    res.json(car);
  } else {
    res.sendStatus(404);
  }
});

/* 
This code is an Express.js route handler that retrieves all cars from a database. It uses the MongoDB find() method to query the 'cars' collection and convert the result to an array. The cars are then logged to the console and sent as a JSON response if they exist, or a 404 status code if not.
 */
app.get('/api/cars', async (req, res) => {
  const cars = await db.collection('cars').find({}).toArray();
  console.log(cars);
  if (cars) {
    res.json(cars);
  } else {
    res.sendStatus(404);
  }
});

/* If connection if successful to the database then output releated message and say what port running on */
connectToDb(() => {
  console.log('Successfully connected to database!');
  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });
});
