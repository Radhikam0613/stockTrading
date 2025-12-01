import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Homepg from './landing-page/home/Homepg';
import Signup from './landing-page/signup/Signup';
import Login from './landing-page/login/Login';
import Aboutpg from './landing-page/about/Aboutpg';
import Productpg from './landing-page/products/Productpg';
import Pricingpg from './landing-page/pricing/Pricingpg';
import Supportpg from './landing-page/support/Supportpg';
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import Notfound from './landing-page/Notfound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Homepg/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<Aboutpg/>}/>
      <Route path='/product' element={<Productpg/>}/>
      <Route path='/pricing' element={<Pricingpg/>}/>
      <Route path='/support' element={<Supportpg/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

