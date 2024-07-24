import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing/ProductListing';
import ProductDesignPage from './pages/ProductDetailPage/ProductDesignPage';
import CartPage from './pages/CartPage/CartPage';
import 'primeicons/primeicons.css';
import './App.css';
import AccountPage from './pages/AccountPage/AccountPage';
import {Toaster} from 'react-hot-toast';
import Navbar from './components/LandingPageComponents/Navbar';

const App = () => {
  return (
    <div>
    <div><Toaster position="top-center" reverseOrder={false}/></div>
    <Navbar/>
    <hr/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-detail/:id" element={<ProductDesignPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
