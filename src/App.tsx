import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Rated from './pages/Rated/Rated';
import SearchPage from './pages/SearchPage';

const App = () => {
  console.log('####: Log, Dude');

  return (
    <div className={s.root}> 
      <Header />
      <Route path="/" exact component={SearchPage} />
      <Route path="/rated" component={Rated} />
    </div>
  );
};

export default App;
