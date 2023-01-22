import { Link } from 'react-router-dom';
//import style from './CarsListPage.module.scss';
import cars from './car-content';

const CarsListPage = () => {
  return (
    <>
      <h1>Cars</h1>
      {cars.map((car) => (
        <Link to={`/cars/${car.Name}`} key={car.Name}>
          <h3>{car.title}</h3>
          <p>{car.Year}</p>
          <p>{car.Origin}</p>
          <img src={car.Image} alt={car.title} style={{ width: '200px' }} />
        </Link>
      ))}
    </>
  );
};

export default CarsListPage;
