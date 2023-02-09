import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './CarsListPage.module.scss';
import cars from './car-content';
import CarsList from '../components/CarsList';

const CarsListPage = () => {
  const [carsInfo, setCarsInfo] = useState([{ name: 'Name', year: 2000 }]);

  useEffect(() => {
    const loadCarsInfo = async () => {
      const response = await axios.get('/api/cars');
      const newCarsInfo = response.data;
      setCarsInfo(newCarsInfo);
    };
    loadCarsInfo();
  }, []);

  return (
    <div className={style.mainCotainer}>
      <main className={style.main}>
        <h1>Cars</h1>
        <div className={style.container}>
          {cars.map((car) => (
            <Link to={`/cars/${car.name}`} key={car.name}>
              <div className={style.card} key={car.id}>
                <h3>{car.Name}</h3>

                <p>{car.body_type}</p>
                <p>{car.origin}</p>
                <p>{car.year}</p>
                <img
                  src={require(`../temp-img/${car.title}.jpg`)}
                  alt={car.name}
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
