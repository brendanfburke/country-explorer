import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello World</h1>
      <Outlet />
    </div>
  );
}

export default App;
