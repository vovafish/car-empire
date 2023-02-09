import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//import cars from './car-content';
import NotFoundPage from './NotFoundPage';
//import style from './CarPage.module.scss';

const CarPage = () => {
  const [carInfo, setCarInfo] = useState({
    name: 'Text',
    year: '0000',
  });

  const { carId } = useParams();

  useEffect(() => {
    const loadCarInfo = async () => {
      const response = await axios.get(`/api/cars/${carId}`);
      const newCarInfo = response.data;
      setCarInfo(newCarInfo);
      //console.log(newCarInfo);
    };
    loadCarInfo();
  }, [carId]);

  //const car = cars.find((car) => car.name === carId);

  if (!carInfo) {
    return <NotFoundPage />;
  }

  return (
    <>
      <p>
        {/* {console.log(carInfo)} */}
        This is {carInfo.name} and been created in {carInfo.year}
      </p>
      <div>
        <p>Color: {carInfo.colour}</p>
        <p>Gearbox type: {carInfo.gearbox}</p>
      </div>

      {/* <img src={car.Image} style={{ width: '200px' }} alt={car.title} /> */}
    </>
  );
};

export default CarPage;
