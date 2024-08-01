import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Lesson1 from './pages/Lesson1/Lesson1';
import Lesson2 from './pages/Lesson2/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';
import Lesson6 from './pages/Lesson6';
import Lesson7 from './pages/Lesson7';
import Lesson8 from './pages/Lesson8';
import Lesson9 from './pages/Lesson9';

import NoPage from './pages/NoPages';

import logo from '../logo.svg';
import './App.css';

import { Homes } from './pages/Lesson9/RouteExample/RouterPages/Homes';
import { About } from './pages/Lesson9/RouteExample/RouterPages/About';
import { Products } from './pages/Lesson9/RouteExample/RouterPages/Products';
// import { NotFound } from './pages/Lesson9/RouteExample/RouterPages/NotFound';
import { Homess } from './pages/Lesson9/UrlParams/UrlParamsPages/Homess';
import { Abouts } from './pages/Lesson9/UrlParams/UrlParamsPages/Abouts';
import { Productss } from './pages/Lesson9/UrlParams/UrlParamsPages/Productss';
import { ProductDetails } from './pages/Lesson9/UrlParams/UrlParamsPages/ProductDetails';

function App() {
  const mainStyles = {
    fontSize: '24px',
    margin: '10px 15px',
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Radu React Homepage</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main style={mainStyles}>
        {' '}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="lesson1" element={<Lesson1 />} />
            <Route path="lesson2" element={<Lesson2 />} />
            <Route path="lesson3" element={<Lesson3 />} />
            <Route path="lesson4" element={<Lesson4 />} />
            <Route path="lesson5" element={<Lesson5 />} />
            <Route path="lesson6" element={<Lesson6 />} />
            <Route path="lesson7" element={<Lesson7 />} />
            <Route path="lesson8" element={<Lesson8 />} />
            <Route path="/lesson9" element={<Lesson9 />} />
            <Route path="/home" element={<Homes />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="/homess" element={<Homess />} />
            <Route path="/abouts" element={<Abouts />} />
            <Route path="/productss" element={<Productss />} />
            <Route path="/productss/:id" element={<ProductDetails />} />
            {/* <Route path="*" element={<NotFound />} /> */}

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
