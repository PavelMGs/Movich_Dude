import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import FilmCard from '../components/FilmCard/FilmCard';
import { ICard } from '../interface/interface';
import handleFetchData from '../utils/fetchData';

interface IList {
  results?: ICard[];
}

interface iSearch {
  genres: any;
}

const SearchPage: React.FC<iSearch> = ({ genres }) => {
  const [list, setList] = useState<IList>();

  useEffect(() => {
    const API_KEY = '15ba90e32ba5069d47756a81a08ede6d';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=return`;

    handleFetchData(url).then((responce) => {
      setList(responce);
    });
  }, []);

  if (!list?.results) {
    return <Spin />;
  } else {
    return (
      <div>
        {list.results.map((item) => {
          return <FilmCard key={item.id} page="search" data={item} genres={genres || ['null']} />;
        })}
      </div>
    );
  }
};

export default SearchPage;
