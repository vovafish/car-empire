import { Link } from 'react-router-dom';
import style from '../pages/CarsListPage.module.scss';

const CarsList = ({ cars }) => {
  return (
    <>
      {cars.map((car) => (
        <Link to={`/cars/${car.Name}`} key={car.id}>
          <div className={style.card}>
            <h3>{car.title}</h3>
            <p>{car.Year}</p>
            <p>{car.Origin}</p>
            <img src={car.Image} alt={car.title} style={{ width: '200px' }} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default CarsList;
