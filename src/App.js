import React from 'react';
import './App.scss';
import Navbar from './components/Navbar.js'
import SlidingBack from './components/SlidingBack.js'
import MypersonalInfo from './components/MypersonalInfo'

function App() {
  return (
    <div className="App">
       <Navbar/>
      <div className="d-flex justify-content-center header-sect">
        <MypersonalInfo/>
        <SlidingBack/>
      </div>
    </div>
  );
}

export default App;
