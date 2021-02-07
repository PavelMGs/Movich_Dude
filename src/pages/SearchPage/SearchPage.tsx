import { Pagination, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import FilmCard from '../../components/FilmCard/FilmCard';
import { ICard } from '../../interface/interface';
import handleFetchData from '../../utils/fetchData';
import s from './SearchPage.module.scss';

interface IList {
  results?: ICard[];
}

interface iSearch {
  genres: any;
}

const SearchPage: React.FC<iSearch> = ({ genres }) => {
  const [list, setList] = useState<IList>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const API_KEY = '15ba90e32ba5069d47756a81a08ede6d';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=return&page=${page}`;

    handleFetchData(url).then((responce) => {
      setList(responce);
    });
  }, [page]);

  if (!list?.results) {
    return <Spin />;
  } else {
    return (
      <div className={s.root}>
        {list.results.map((item) => {
          return <FilmCard key={item.id} page="search" data={item} genres={genres || ['null']} />;
        })}
        <Pagination
          className={s.pagination}
          onChange={(e) => setPage(e)}
          defaultCurrent={1}
          total={1460}
          size="small"
          showSizeChanger={false}
          defaultPageSize={20}
        />
      </div>
    );
  }
};

export default SearchPage;
