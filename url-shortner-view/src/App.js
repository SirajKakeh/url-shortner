import React from 'react';
import './App.css';
import Header from './Header/Header';
import View from './View/View';
import Footer from './Footer/Footer';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header><Header/></header>
      <main><View/></main> 
      <footer><Footer/></footer> 
    </div>
  );
}

export default App;
