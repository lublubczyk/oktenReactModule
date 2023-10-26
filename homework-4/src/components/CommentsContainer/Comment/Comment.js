import { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";

import style from "./Comment.module.css"

const Comment = ({ comment }) => {
    
    const { id, postId, name, email, body } = comment;
    
    const [trigger, setTriger] = useState(false);

    const navigate = useNavigate();

    const show = () => {
        if (!trigger) {
            navigate('post', { state: postId });
        } else {
            navigate(-1);
        }
        setTriger(prev => !prev);
    };

    return (
        <div className={style.Comment}>
            <div>Comment Id: {id}</div>
            <div>Post Id: {postId}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <button onClick={show} >{trigger ? 'Hide Post' : 'Show Post'}</button>
            {trigger && <Outlet />}
        </div>
    )
};

export { Comment };