import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CarPage from './pages/CarPage';
import CarListPage from './pages/CarsListPage';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cars" element={<CarListPage />} />
            <Route path="/cars/:carsId" element={<CarPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
