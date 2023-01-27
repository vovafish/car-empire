import { Link } from 'react-router-dom';
import style from './CarsListPage.module.scss';
import cars from './car-content';

const CarsListPage = () => {
  return (
    <div className={style.mainCotainer}>
      <main className={style.main}>
        <h1>Cars</h1>
        <div className={style.container}>
          {cars.map((car) => (
            <Link to={`/cars/${car.Name}`} key={car.id}>
              <div className={style.card}>
                <h3>{car.title}</h3>
                <p>{car.Year}</p>
                <p>{car.Origin}</p>
                <img
                  src={car.Image}
                  alt={car.title}
                  style={{ width: '200px' }}
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CarsListPage;
