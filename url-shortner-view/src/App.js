import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import View from './View/View';
import Footer from './Footer/Footer';
import SecondPageView from './SecondPageView/SecondPageView';
import { Route } from 'react-router-dom';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  return (
    <div className='App'>
      <Header />
      <Route
        path='/'
        exact
        render={() => (
          <View
            url={url}
            setUrl={setUrl}
            shortUrl={shortUrl}
            setShortUrl={setShortUrl}
          />
        )}
      />
      <Route
        path='/shortener'
        render={() => (
          <SecondPageView
            url={url}
            setUrl={setUrl}
            shortUrl={shortUrl}
            setShortUrl={setShortUrl}
          />
        )}
      />
      <Footer />
    </div>
  );
}

export default App;
