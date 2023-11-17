import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { episodesActions } from '../../redux';
import { Episode } from '../Episode';
import style from './Episodes.module.css';

const Episodes = () => {
    
    const { episodes: { info, results }, isLoading } = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({ page: '1' });
    
    const page = query.get('page');
    
    useEffect(() => {
        dispatch(episodesActions.getAllEpisodes(page));
    }, [dispatch, page]);
    
    const prevPage = () => +page >= 2 ? setQuery({ page: + page - 1 }) : setQuery({ page: page });
    const nextPage = () => +page <= 2 ? setQuery({ page: + page + 1 }) : setQuery({ page: page });
    
    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {results &&
                <div>
                    <div className={style.Episodes}>
                        {results.map(episode => <Episode key={episode.id} episode={episode} />)}
                    </div>
                    <div className={style.EpisodesButtons}>
                        <button disabled={!info.prev} onClick={prevPage}>Prev</button>
                        <button disabled={!info.next} onClick={nextPage}>Next</button>
                    </div>
                </div>}
        </>
    )
};

export { Episodes };