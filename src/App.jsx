import React from 'react';
import './App.css';
import Home from './pages/Home';
import ContinentIndex from './pages/ContinentIndex';
import CountryIndex from './pages/CountryIndex';
import CountryShow from './pages/CountryShowPage';
import FlagIndex from './pages/FlagIndex';
import SubregionIndex from './pages/SubregionIndex';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Home />
      <ContinentIndex />
      <CountryIndex /> 
      <CountryShow />
      <FlagIndex /> 
      <SubregionIndex />
    </div>
  );
}

export default App;
