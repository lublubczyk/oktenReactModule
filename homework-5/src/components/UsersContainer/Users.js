import { useLoaderData } from 'react-router-dom';

import { User } from './User.js';
import style from './Users.module.css';

const Users = () => {
    
    const { data: users } = useLoaderData();

    return (
        <div className={style.Users}>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    )
};

export { Users };