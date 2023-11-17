import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Character } from "../Character";
import {episodesActions} from '../../redux'

const Characters = () => {
  
     const { ids:{ids} } = useSelector(state => state.episodes);
     const {characters} = useSelector(state => state.episodes);
     const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(episodesActions.getAllCharacters(ids))
    }, [ids, dispatch]);
    
    return (
        <div>
            Characters
            {characters.length && characters.map(val => <Character key={val.id} character={val } />)}
        </div>
    )
};

export { Characters };