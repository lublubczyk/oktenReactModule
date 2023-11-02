import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Episode } from "../Episode/Episode";
import style from './Episodes.module.css';
import { rickMortyService } from '../../../services';

const Episodes = () => {

    const [espisodes, setEpisodes] = useState([]);
    const [prevNext, setPrevNext] = useState({ prev: null, next: null });
    const [query, setQuery] = useSearchParams({ page: '1' });

    useEffect(() => {
        rickMortyService.getAllEpisodes(query.get('page'))
            .then(({ data }) => {
                setEpisodes(data.results);
                setPrevNext({ prev: data.info.prev, next: data.info.next });
            });
    }, [query.get('page')]);
    
    const prevPage = () => setQuery({ page: + query.get('page') - 1 });
    const nextPage = () => setQuery({ page: + query.get('page') + 1 });
    
    return (
        <>
            <div className={style.Episodes} >
                {espisodes.map(episode => <Episode key={episode.id} episode={episode} />)}
            </div>
            <div className={style.Button}>
                <button disabled={!prevNext.prev} onClick={prevPage}>Prew</button>
                <button disabled={!prevNext.next} onClick={nextPage}>Next</button>
            </div>
        </>
    )
};

export { Episodes };