import style from './CarsListPage.module.scss';
import cars from './car-content';
import CarsList from '../components/CarsList';

const CarsListPage = () => {
  return (
    <div className={style.mainCotainer}>
      <main className={style.main}>
        <h1>Cars</h1>
        <div className={style.container}>
          <CarsList cars={cars} style={style} />
        </div>
      </main>
    </div>
  );
};

export default CarsListPage;
