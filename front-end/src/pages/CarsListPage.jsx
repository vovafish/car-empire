import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import style from './CarsListPage.module.scss';

const CarsListPage = () => {
  const [carsInfo, setCarsInfo] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  /* 
    fuel_type, colour,body_type,
    engine_size,doors,seats,acceleration,fuel_consumption,description,
    price,*/

  const [nameValue, setNameValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [originValue, setOriginValue] = useState('');
  const [weightValue, setWeightValue] = useState('');
  const [mileageValue, setMileageValue] = useState('');
  const [gearboxValue, setGearboxValue] = useState('');
  const [fuelTypeValue, setFuelTypeValue] = useState('');
  const [colourValue, setColourValue] = useState('');
  const [bodyTypeValue, setBodyTypeValue] = useState('');
  const [engineSizeValue, setEngineSizeValue] = useState('');
  const [doorsValue, setDoorsValue] = useState('');
  const [seatsValue, setSeatsValue] = useState('');
  const [accelerationValue, setAccelerationValue] = useState('');
  const [fuelConsumptionValue, setFuelConsumptionValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [imageValue, setImageValue] = useState('');

  useEffect(() => {
    const loadCarsInfo = async () => {
      const response = await axios.get('/api/cars');
      const newCarsInfo = response.data;
      setCarsInfo(newCarsInfo);
    };
    loadCarsInfo();
  }, []);

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

  const insertCar = (e) => {
    //
  };

  const onInsertCar = async () => {
    const response = await axios.post('/api/cars', {
      name: nameValue,
      title: titleValue,
      year: yearValue,
      origin: originValue,
      weight: weightValue,
      mileage: mileageValue,
      gearbox: gearboxValue,
      fuel_type: fuelTypeValue,
      colour: colourValue,
      body_type: bodyTypeValue,
      engine_size: engineSizeValue,
      doors: doorsValue,
      seats: seatsValue,
      acceleration: accelerationValue,
      fuel_consumption: fuelConsumptionValue,
      description: descriptionValue,
      price: priceValue,
      image: imageValue,
    });

    /* const { token } = response.data;
    setToken(token); */
  };

  const handleInsert = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="mainContainer">
      <main className={style.main}>
        <h1>Cars</h1>
        <button onClick={handleInsert}>Insert</button>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          className={style.modal}
          style={customStyles}
        >
          <button onClick={() => setModalIsOpen(false)}>X</button>
          <div className={style.insertForm}>
            <input
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={yearValue}
              onChange={(e) => setYearValue(e.target.value)}
              placeholder=""
            />
            <input
              value={originValue}
              onChange={(e) => setOriginValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={weightValue}
              onChange={(e) => setWeightValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={mileageValue}
              onChange={(e) => setMileageValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={gearboxValue}
              onChange={(e) => setGearboxValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={fuelTypeValue}
              onChange={(e) => setFuelTypeValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={colourValue}
              onChange={(e) => setColourValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={bodyTypeValue}
              onChange={(e) => setBodyTypeValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={engineSizeValue}
              onChange={(e) => setEngineSizeValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={doorsValue}
              onChange={(e) => setDoorsValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={seatsValue}
              onChange={(e) => setSeatsValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={accelerationValue}
              onChange={(e) => setAccelerationValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={fuelConsumptionValue}
              onChange={(e) => setFuelConsumptionValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
              placeholder=""
              required
            />
            <input
              value={imageValue}
              onChange={(e) => setImageValue(e.target.value)}
              placeholder=""
              required
            />
            <button onClick={onInsertCar}>Add new car</button>
          </div>
        </Modal>
        <div className={style.container}>
          {carsInfo.map((car) => (
            <Link to={`/cars/${car.name}`} key={car._id}>
              <div className={style.card} key={car._id}>
                <h3>{car.name}</h3>
                <p>{car.body_type}</p>
                <p>{car.origin}</p>
                <p>{car.year}</p>
                <img
                  //src={require(`../img/cars/${car.title}.jpg`)}
                  src={
                    car.image
                      ? car.image
                      : require(`../img/cars/${car.title}.jpg`)
                  }
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
