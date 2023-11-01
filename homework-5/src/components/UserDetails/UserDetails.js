import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import { Posts } from '../Posts/Posts.js';
import style from './UserDetails.module.css';

const UserDetails = () => {

    const { data: { id, name, username, email, website } } = useLoaderData();
    
    const [flag, setFlag] = useState(false);

    return (
        <div>
            <div className={style.UserDetails}>
                UserDtails
                <div>User Id: {id}</div>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Website: {website}</div>
                <button onClick={() => setFlag(prev => !prev)}>Posts of current User</button>
            </div>
            {flag && <Posts id={id} />}
        </div>
    )
};

export { UserDetails };