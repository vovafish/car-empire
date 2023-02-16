/* 
Importing all the needs:
Hooks from React
axios library - serves to create HTTP request
NotFoundPage page
Styling file
*/
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
//import style from './CarPage.module.scss';

const CarPage = () => {
  //making vars to track state of carInfo (API response from mongodb)
  const [carInfo, setCarInfo] = useState();
  //to access the carID of each car object
  const { carId } = useParams();

  /* 
  Create affect that run when carId var being used.
  It gets the response from the specific http
  Then getting reponse data into newCarInfo
  and updating the state of the carInfo
  */
  useEffect(() => {
    const loadCarInfo = async () => {
      const response = await axios.get(`/api/cars/${carId}`);
      const newCarInfo = response.data;
      setCarInfo(newCarInfo);
    };
    loadCarInfo();
  }, [carId]);

  //if carInfo is empty/ no car then return to the NotFoundPagew
  if (!carInfo) {
    return <NotFoundPage />;
  }

  /* Creating the HTML that will be displayed when navigate to the CarPage */
  return (
    //creating main container
    <div className="mainContainer">
      <p>
        This is {carInfo.name} and been created in {carInfo.year}
      </p>
      <div>
        <p>Color: {carInfo.colour}</p>
        <p>Gearbox type: {carInfo.gearbox}</p>
        <img
          src={require(`../img/cars/${carInfo.title}.jpg`)}
          alt={carInfo.name}
          style={{ width: '200px' }}
        />
      </div>
    </div>
  );
};

//exporing the CarPage
export default CarPage;
