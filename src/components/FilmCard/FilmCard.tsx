import { Rate } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ICard } from '../../interface/interface';
import { setCard } from '../../redux/actions/actions';

import s from './FilmCard.module.scss';

interface IFilmCard {
  data: ICard;
  genres: string[];
  page: string;
}

const FilmCard = ({ data, genres, page }: IFilmCard) => {
  const dispatch = useDispatch();

  const date = new Date(data.release_date).toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleChangeRate = (rate: number) => {
    const ratedCard = data;
    ratedCard.my_rate = rate;
    dispatch(setCard(ratedCard));
  };

  const localGenre: any = genres.filter((item: any) => data.genre_ids.includes(item.id)).map((item: any) => item.name);

  return (
    <div className={s.root}>
      <figure className={s.poster}>
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="Poster" />
      </figure>
      <div className={s.film_info}>
        <h5 className={s.title}>{data.title}</h5>

        <div className={s.vote_average}>
          <span>{data.vote_average}</span>
        </div>

        <span className={s.release_date}>{date}</span>

        <div className={s.genres}>
          {localGenre.map((item: string, index: number) => {
            if (index <= 4) {
              //Большее количество не влазит в карточку (Return to Jurassic Park)
              return (
                <div key={`${data.id}genre${index}`} className={s.genre_label}>
                  {item}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className={s.overview}>{data.overview}</div>

      <div className={s.stars_container}>
        {page === 'search' ? (
          <Rate className={s.stars} allowHalf count={10} onChange={(rate) => handleChangeRate(rate)} />
        ) : (
          <Rate
            className={s.stars}
            allowHalf
            count={10}
            defaultValue={data.my_rate}
            onChange={(rate) => handleChangeRate(rate)}
          />
        )}
      </div>
    </div>
  );
};
export default FilmCard;
