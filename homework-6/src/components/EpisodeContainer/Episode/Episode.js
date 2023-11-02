import { useNavigate } from 'react-router-dom';

import style from './Episode.module.css';

const Episode = ({ episode }) => {
    
    const { id, name, episode: chapter, characters } = episode;
    const navigate = useNavigate();

    return (
        <div className={style.Episode} onClick={() => navigate('/characters', { state: characters })}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Chapter: {chapter}</div>
        </div>
    )
};

export { Episode };