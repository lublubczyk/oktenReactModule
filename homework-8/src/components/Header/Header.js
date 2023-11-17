import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
    
    const { pathname } = useLocation();
    const { chapter: { chapter } } = useSelector(state => state.episodes);

    return (
        <div className={style.Header} >
            <h1>Rick & Morty</h1>
            {pathname === '/characters' && <h3>Chapter: {chapter}</h3>}
        </div>
    )
};

export { Header };