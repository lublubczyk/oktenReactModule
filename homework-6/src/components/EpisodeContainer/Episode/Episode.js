import { useNavigate } from 'react-router-dom';

import style from './Episode.module.css';
import { useAppContext } from '../../../hooks';
import { Context } from '../../../hok';

const Episode = ({ episode }) => {
    
    const { id, name, episode: chapter, characters } = episode;
    const navigate = useNavigate();
    const { setEpisode } = useAppContext(Context);
    
    const click = () => {
        navigate('/characters', { state: characters });
        setEpisode(chapter);
    };

    return (
        <div className={style.Episode} onClick={click}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Chapter: {chapter}</div>
        </div>
    )
};

export { Episode };