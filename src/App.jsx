import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
