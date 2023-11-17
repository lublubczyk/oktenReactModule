import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Character } from "../Character";
import {episodesActions} from '../../redux'
import style from './Characters.module.css';

const Characters = () => {
     
    const navigate = useNavigate();
    const { ids: { ids }, isLoading } = useSelector(state => state.episodes);
    const { characters } = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(episodesActions.getAllCharacters(ids))
    }, [ids, dispatch]);
    
    const back = () => {
        navigate(-1);
    }

    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            <button onClick={back} >Back</button>
            <div className={style.Characters} >
                {characters.map(val => <Character key={val.id} character={val} />)}
            </div>
        </>

    )
};

export { Characters };