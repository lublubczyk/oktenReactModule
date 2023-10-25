import { useEffect } from 'react';

import { User } from "../User/User";
import { usersAxiosServise } from '../../services/usersAxiosService';
import style from './ShowUsers.module.css'

const ShowUsers = ({users,setUsers}) => {
    
    useEffect(() => {
        usersAxiosServise.getAll().then(({ data }) => setUsers(data));
    },[]);

    return (
        <div className={style.ShowUsers}>
            {users.map((user)=><User key={user.id} user={user} />)} 
        </div>
    )
};

export { ShowUsers };