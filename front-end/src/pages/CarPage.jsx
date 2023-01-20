import { useParams } from 'react-router-dom';
import cars from './car-content';
import style from './CarPage.module.scss';

const CarPage = () => {
  const { carId } = useParams();
  const car = cars.find((car) => car.Name === carId);

  return (
    <>
      <h1>{car.Name}</h1>
      <p>Year: {car.Year}</p>
      <img src={car.Image} alt={car.Name} />
    </>
  );
};

export default CarPage;
