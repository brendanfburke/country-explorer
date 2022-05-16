import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import ContinentIndex from './pages/ContinentIndex';
import CountryIndex from './pages/CountryIndex';
import CountryShow from './pages/CountryShowPage';
import FlagIndex from './pages/FlagIndex';
import SubregionIndex from './pages/SubregionIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <Routes>
       <Route path='/' element={<App />} >
         <Route index element={<Home />} />
         <Route path='/countries' element={<CountryIndex />} />
         <Route path='/continents' element={<ContinentIndex />} />
         <Route path='/subregions' element={<SubregionIndex />} />
         <Route path='/flags' element={<FlagIndex />} />
          <Route path=':id' element={<CountryShow />} />
       </Route>
     </Routes>
    </Router>
  </React.StrictMode>
);


