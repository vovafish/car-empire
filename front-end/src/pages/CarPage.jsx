/* 
Importing all the needs:
Hooks from React
axios library - serves to create HTTP request
NotFoundPage page
Styling file
*/
import { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import emailjs from '@emailjs/browser';
//import style from './CarPage.module.scss';

const CarPage = () => {
  //making vars to track state of carInfo (API response from mongodb)
  const [carInfo, setCarInfo] = useState();
  const [showForm, setShowForm] = useState(false);
  //to access the carID of each car object
  const { carId } = useParams();

  const form = useRef();

  const handlePurchase = () => {
    setShowForm(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8lfvu6w',
        'template_e7yl9tj',
        form.current,
        'OobbSW-DHtFMhWbqK'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <button onClick={handlePurchase}>Buy</button>
        {showForm && (
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label>Name</label>
                <input type="text" name="user_name" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" />
              </div>
              <div>
                <label>Car</label>
                <input name="car" placeholder={carInfo.name} />
              </div>
              <div>
                <label>Car</label>
                <input
                  name="price"
                  placeholder={carInfo.price}
                  readOnly={true}
                />
              </div>
              <div>
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

//exporing the CarPage
export default CarPage;
