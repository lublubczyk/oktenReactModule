import { useLocation } from 'react-router-dom';

import { Context } from '../../hok';
import { useAppContext } from '../../hooks';
import style from './Header.module.css';

const Header = () => {
    
    const location = useLocation();
    const { episode } = useAppContext(Context);
       
    return (
        <div className={style.Header}>
            <h1>Rick & Morty</h1>
            {location.pathname === '/characters' && episode && <h4>Episode: {episode}</h4>}
            
        </div>
    )
};

export { Header };