import { useParams } from 'react-router-dom';
import cars from './car-content';
//import style from './CarPage.module.scss';

const CarPage = () => {
  const { carId } = useParams();
  const car = cars.find((car) => car.Name === carId);

  return (
    <>
      <h1>{car.title}</h1>
      <div>
        <p>It uses {car.Miles_per_Gallon} miles per gallon</p>
        <p>Contains {car.Cylinders}</p>
        <p>Weight: {car.Weight_in_lbs} lbs</p>
        <p>It has {car.Horsepower}</p>
        <p>Origin: {car.Origin}</p>
        <p>Year: {car.Year}</p>
        <p>Accelerates to {car.Acceleration}</p>
      </div>

      <img src={car.Image} style={{ width: '200px' }} alt={car.title} />
    </>
  );
};

export default CarPage;
