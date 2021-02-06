import { Rate } from 'antd';
import React from 'react'
import { ICard } from '../../interface/interface';

import s from './FilmCard.module.scss'

interface IFilmCard {
    data: ICard
    genres: string[]
}

const FilmCard = ({ data, genres }: IFilmCard) => {
    const date = new Date(data.release_date).toLocaleDateString('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const localGenre: any = genres.filter((item: any) =>data.genre_ids.includes(item.id))
    .map((item: any) => item.name);

    return (
        <div className={s.root}>
            <figure 
            className={s.poster}
            >
                <img 
                    
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
                    alt="Poster"
                />
            </figure>
            <div className={s.film_info}>
                
                    <h5 className={s.title}>
                        { data.title }
                    </h5>
            
                    <div className={s.vote_average}>
                        <span>
                            { data.vote_average }
                        </span>
                    </div>

                <span className={s.release_date}>
                    {date}
                </span>

                <div className={s.genres}>
                    {localGenre.map((item: string, index: number) => {
                        return <div
                        key={`${data.id}genre${index}`}
                        className={s.genre_label}
                        >
                            {item}
                        </div>
                    })}
                </div>
            
            </div>

            <div className={s.overview}>
                    {data.overview}
            </div>

            <div className={s.stars_container}>
            <Rate
                className={s.stars}
                allowHalf
                count={10}
            />
            </div>

        </div>
    )
}


export default FilmCard;