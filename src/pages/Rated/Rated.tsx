import React from 'react';
import { useSelector } from 'react-redux';
import FilmCard from '../../components/FilmCard/FilmCard';
import { ICard } from '../../interface/interface';

import s from './Rated.module.scss';

interface IRated {
  genres: any;
}

const Rated: React.FC<IRated> = ({ genres }: any) => {
  const store: any = useSelector((state) => state);

  return store.filmCards.length ? (
    <div className={s.root}>
      {store.filmCards.map((item: ICard) => {
        return <FilmCard key={item.id} page="rated" data={item} genres={genres || ['null']} />;
      })}
    </div>
  ) : (
    <div className={s.root}>Here will be rated movies, Dude</div>
  );
};

<div>Rated movies will be here, Dude</div>;

export default Rated;
