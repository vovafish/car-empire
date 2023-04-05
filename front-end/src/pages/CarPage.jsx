/* 
Importing all the needs:
Hooks from React
axios library - serves to create HTTP request
NotFoundPage page
Styling file
*/
import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import emailjs from '@emailjs/browser';
import style from './CarPage.module.scss';

const CarPage = () => {
  //making vars to track state of carInfo (API response from mongodb)
  const [carInfo, setCarInfo] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //to access the carID of each car object
  const { carId } = useParams();

  const form = useRef();

  const handlePurchase = () => {
    setModalIsOpen(true);
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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '21px',
      backgroundColor: 'azure',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/cars/${carInfo.name}`);
      // Reload the page to update the list of cars
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
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

  let image =
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
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
          //  src={image ? image : require(`../img/cars/${carInfo.title}.jpg`)}
          //src={require(`../img/cars/${carInfo.title}.jpg`)}
          src={image ? image : require(`../img/cars/${carInfo.title}.jpg`)}
          alt={carInfo.name}
          style={{ width: '200px' }}
        />
        <button onClick={handlePurchase}>Buy</button>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          className={style.modal}
          style={customStyles}
        >
          <button onClick={() => setModalIsOpen(false)}>X</button>
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
              <input name="car" placeholder={carInfo.name} readOnly={true} />
            </div>
            <div>
              <label>Car</label>
              <input name="price" placeholder={carInfo.price} readOnly={true} />
            </div>
            <div>
              <input type="submit" value="Send" />
            </div>
          </form>
        </Modal>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

//exporing the CarPage
export default CarPage;
