import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdditionalItemPage from './pages/AdditionalItemPage';
import ReturnOfVehiclePage from './pages/ReturnOfVehiclePage';
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cars" element={<CarListPage />} />
            <Route path="/additional-item" element={<AdditionalItemPage />} />
            <Route path="/return-vehicle" element={<ReturnOfVehiclePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cars/:carId" element={<CarPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
