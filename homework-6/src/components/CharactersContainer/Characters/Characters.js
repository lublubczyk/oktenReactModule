import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Character } from "../Character/Character";
import { rickMortyService } from '../../../services';
import style from './Characters.module.css';
import { useAppContext } from '../../../hooks';
import { Context } from '../../../hok';

const Characters = () => {
    
    const [characters, setCharacters] = useState([]);
    const { state } = useLocation();
    const navigate = useNavigate();
    const { resetEpisode } = useAppContext(Context);

    const query = state.reduce((acum, str) => {
        acum.push(str.split('/').pop())
        return acum;
    }, []).toString();
    
    useEffect(() => {
        rickMortyService.getAllCharacters(query).then(({ data }) => setCharacters(data))
    }, [query])
    
    const clickBack = () => {
        navigate(-1);
        resetEpisode();
    };

    return (
        <>
            <button onClick={clickBack}>Back</button>
            <div className={style.Characters}>
                {characters.map(character => <Character key={character.id} character={character} />)}
            </div>
        </>
    )
};

export { Characters };