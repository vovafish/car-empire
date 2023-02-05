import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cars from './car-content';
import NotFoundPage from './NotFoundPage';
//import style from './CarPage.module.scss';

const CarPage = () => {
  const [carInfo, setCarInfo] = useState({
    name: 'Text',
    Year: '0000',
  });

  const { carId } = useParams();

  useEffect(() => {
    const loadCarInfo = async () => {
      const response = await axios.get(`/api/cars/${carId}`);
      const newCarInfo = response.data;
      setCarInfo(newCarInfo);
    };
    loadCarInfo();
  }, [carId]);

  const car = cars.find((car) => car.Name === carId);

  if (!car) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{car.title}</h1>
      <p>
        This is {carInfo.name} and been created in {carInfo.Year}
      </p>
      <div>
        <p>It uses {car.Miles_per_Gallon} miles per gallon</p>
        <p>Contains {car.Cylinders} cylinders</p>
        <p>Weight: {car.Weight_in_lbs} lbs</p>
        <p>It has {car.Horsepower} Horsepower</p>
        <p>Origin: {car.Origin}</p>
        <p>Year: {car.Year}</p>
        <p>Accelerates to {car.Acceleration}</p>
      </div>

      <img src={car.Image} style={{ width: '200px' }} alt={car.title} />
    </>
  );
};

export default CarPage;
