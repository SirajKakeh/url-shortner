import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import View from './View/View';
import Footer from './Footer/Footer';
import SecondPageView from './SecondPageView/SecondPageView';
import { Route } from 'react-router-dom';
import Spinner from './Spinner/Spinner';
function App(props) {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [spinner, setSpinner] = useState(false);

  let spinnerDiv = '';
  if (spinner) {
    spinnerDiv = <Spinner />;
  }
  return (
    <div className='App'>
      {spinnerDiv}
      <Header />
      <Route
        path='/'
        exact
        render={() => (
          <View
            url={url}
            setUrl={setUrl}
            setShortUrl={setShortUrl}
            spinner={spinner}
            setSpinner={setSpinner}
          />
        )}
      />{' '}
      <Route
        path='/shortener'
        render={() => <SecondPageView url={url} shortUrl={shortUrl} />}
      />
      <Footer />
    </div>
  );
}

export default App;
