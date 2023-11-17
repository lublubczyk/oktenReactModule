import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { episodesActions } from '../../redux';
import { Episode } from '../Episode';
import style from './Episodes.module.css';

const Episodes = () => {
    
    const { episodes: { info, results } } = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    
    const [query, setQuery] = useSearchParams();
    const page = query.get('page');
    
    
    useEffect(() => {
        dispatch(episodesActions.getAllEpisodes(page));
    }, [dispatch, page]);
    
    const prevPage = () => setQuery({ page: + query.get('page') - 1 });
    const nextPage = () => setQuery({ page: + query.get('page') + 1 });
    
    return (
        <>
            {results &&
                <div>
                    <div className={style.Episodes}>
                        {results.map(episode => <Episode key={episode.id} episode={episode} />)}
                    </div>
                    <div>
                        <button disabled={!info.prev} onClick={prevPage}>Prev</button>
                        <button disabled={!info.next} onClick={nextPage}>Next</button>
                    </div>
                </div>}
        </>
    )
};

export { Episodes };