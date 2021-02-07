import React from 'react';
import { useSelector } from 'react-redux';
import FilmCard from '../../components/FilmCard/FilmCard';
import { ICard } from '../../interface/interface';

interface IRated {
  genres: any;
}

const Rated: React.FC<IRated> = ({ genres }: any) => {
  const store: any = useSelector((state) => state);

  return store.filmCards.length ? (
    store.filmCards.map((item: ICard) => {
      return <FilmCard key={item.id} page="rated" data={item} genres={genres || ['null']} />;
    })
  ) : (
    <div>Here will be rated movies, Dude</div>
  );
};

<div>Rated movies will be here, Dude</div>;

export default Rated;
