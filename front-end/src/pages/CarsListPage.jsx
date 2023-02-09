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
      //setCarsInfo(JSON.parse(newCarsInfo));
      setCarsInfo(newCarsInfo);
      console.log(carsInfo);
    };
    loadCarsInfo();
  }, []);
  //console.log(carsInfo);
  return (
    <div className={style.mainCotainer}>
      {/* {carsInfo.forEach((car) => {
        console.log(car.name);
      })} */}

      {/* {console.log(carsInfo)} */}
      {/* {for(let i = 0; i < carsInfo.length; i++) {
       let car = carsInfo[i];

    console.log(car.name);
}} */}
      <main className={style.main}>
        {console.log(carsInfo)}
        <h1>Cars</h1>
        <div className={style.container}>
          {/* <CarsList cars={cars} style={style} /> */}
          {/* {
            for (var i = 0; i < carsInfo.length; i++) {
              
          }
          } */}
          {carsInfo.map((car) => (
            <Link to={`/cars/${car.name}`} key={car.id}>
              {/*  {carsInfo.forEach((car) => {
                console.log(car.name);
              })} */}
              <div className={style.card}>
                <h3>{car.name}</h3>
                {/* <p>
                  This is {carsInfo.name} and it been created in
                  {carsInfo.year}
                </p> */}
                <p>{car.body_type}</p>
                <p>{car.origin}</p>
                <p>{car.year}</p>
                {/* <img src={car.Image} alt={car.title} style={{ width: '200px' }} /> */}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CarsListPage;
