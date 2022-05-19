import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import CountryIndex from './pages/CountryIndex';
import CountryShow from './pages/CountryShowPage';
import FlagIndex from './pages/FlagIndex';
import SearchResults from './pages/SearchResults';
import ContinentShow from './pages/ContinentShowPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <Routes>
       <Route path='/' element={<App />} >
         <Route index element={<Home />} />
         <Route path='/countries' element={<CountryIndex />} />
         <Route path='/continents' element={<ContinentShow />} >
           <Route path=':id' element={<ContinentShow />} />
         </Route>
         <Route path='/flags' element={<FlagIndex />} />
         <Route path=':id' element={<CountryShow />} />
         <Route path='/search' element={<SearchResults />} >
           <Route path=':id' element={<SearchResults />} />
         </Route>
       </Route>
     </Routes>
    </Router>
  </React.StrictMode>
);


