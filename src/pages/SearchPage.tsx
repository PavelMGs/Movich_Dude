import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import FilmCard from '../components/FilmCard/FilmCard';
import { firstCard, ICard } from '../interface/interface';

interface IList {
    results?: ICard[]
}

export type iGenres = Array<string>;


const SearchPage = () => {

    const [list, setList] = useState<IList>();
    const [genres, setGenres] = useState<iGenres>()

    useEffect(() => {
        const API_KEY = '15ba90e32ba5069d47756a81a08ede6d';
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=return`; 
        const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

        handleFetchData(url)
        .then((responce) => {
            setList(responce);
        })
        
        handleFetchData(urlGenres)
        .then((responce) => {
            setGenres(responce.genres);
        })
    }, []) 

    const handleFetchData = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    

        // return (
        //     <div>
        //         <FilmCard id={1} data={firstCard} genres={genres || ['null']}/>
        //     </div>
        // )
        
        if(!list?.results) {
            return <Spin />
        } else {
            return (
                <div>
                    {
                        list.results.map((item) => {
                            return <FilmCard key={item.id} data={item} genres={genres || ['null']} />
                        })
                    }
                </div>
            )
        }
        
    
}

export default SearchPage;