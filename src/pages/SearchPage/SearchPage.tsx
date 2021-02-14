import { Input, Pagination, Spin } from 'antd';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../../private';
import FilmCard from '../../components/FilmCard/FilmCard';
import { ICard } from '../../interface/interface';
import handleFetchData from '../../utils/fetchData';
import s from './SearchPage.module.scss';

interface IList {
  results?: ICard[];
  total_results?: number;
}

interface iSearch {
  genres: any;
}

const SearchPage: React.FC<iSearch> = ({ genres }) => {
  const [list, setList] = useState<IList>();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('return');

  useEffect(() => {
    if (query === '') {
      setQuery('return');
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=return&page=${page}`;

      handleFetchData(url).then((responce) => {
        setList(responce);
      });
    } else {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;

      handleFetchData(url).then((responce) => {
        setList(responce);
      });
    }
  }, [page, query]);

  const handleQuery = async (e: any) => {
    setQuery(e.target.value);
  };

  if (!list?.results) {
    return (
      <div>
        <Input placeholder="Type to search" onChange={debounce(handleQuery, 500)} className={s.input} />
        <Spin />
      </div>
    );
  } else {
    return (
      <div className={s.root}>
        <Input placeholder="Type to search" onChange={debounce(handleQuery, 500)} className={s.input} />
        {list.results.map((item) => {
          return <FilmCard key={item.id} page="search" data={item} genres={genres || ['null']} />;
        })}
        <Pagination
          className={s.pagination}
          onChange={(e) => setPage(e)}
          defaultCurrent={1}
          total={list.total_results}
          size="small"
          showSizeChanger={false}
          defaultPageSize={20}
        />
      </div>
    );
  }
};

export default SearchPage;
