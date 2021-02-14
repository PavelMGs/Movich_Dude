import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { API_KEY } from '../private';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Rated from './pages/Rated/Rated';
import SearchPage from './pages/SearchPage/SearchPage';
import handleFetchData from './utils/fetchData';

export type iGenres = Array<string>;

const App = () => {
  const [genres, setGenres] = useState<iGenres>();

  useEffect(() => {
    const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

    handleFetchData(urlGenres).then((responce) => {
      setGenres(responce.genres);
    });
  }, []);

  return (
    <div className={s.root}>
      {/* <Button onClick={() => dispatch(clearState())} type="primary">
        ClearState
      </Button> */}
      <Header />
      <Route path="/" exact>
        <SearchPage genres={genres} />
      </Route>
      <Route path="/rated">
        <Rated genres={genres} />
      </Route>
    </div>
  );
};

export default App;
