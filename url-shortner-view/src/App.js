import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import View from './View/View';
import Footer from './Footer/Footer';
import SecondPageView from './SecondPageView/SecondPageView';
import { Route } from 'react-router-dom';
import Spinner from './Spinner/Spinner';
// import { connect } from 'react-redux';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [spinner, setSpinner] = useState(false);

  return (
    <div className='App'>
      {spinner && <Spinner />} <Header />
      <Route
        path='/'
        exact
        render={() => (
          <View
            url={url}
            setUrl={setUrl}
            setShortUrl={setShortUrl}
            setSpinner={setSpinner}
          />
        )}
      />
      <Route
        path='/shortener'
        render={() => <SecondPageView url={url} shortUrl={shortUrl} />}
      />
      <Footer />
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   url: state.url,
// });

export default App;
//  connect(mapStateToProps)(App);
