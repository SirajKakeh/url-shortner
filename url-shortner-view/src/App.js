import React from 'react';
import './App.css';
import Header from './Header/Header';
import View from './View/View';
import Footer from './Footer/Footer';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <View/>
      <Footer/>
    </div>
  );
}

export default App;