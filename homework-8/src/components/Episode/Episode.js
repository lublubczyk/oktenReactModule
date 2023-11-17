import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { episodesActions } from '../../redux';
import style from './Episode.module.css';

const Episode = ({ episode }) => {
    
    const { id, name, episode: chapter, characters } = episode;
    const navigate = useNavigate();
    const dispatch = useDispatch(state => state.ids);

    const click = () => {
        const ids = characters.map(val => val.split('/').pop()).toString();
        dispatch(episodesActions.setIds({ ids }));
        dispatch(episodesActions.setChapter({ chapter }));
        navigate('/characters');
    };

    return (
        <div className={style.Episode} onClick={click} >
            Episode
            <h4>id: {id}</h4>
            <h4>name: {name}</h4>
            <h4>chapter: {chapter}</h4>
        </div>
    )
};
export { Episode };