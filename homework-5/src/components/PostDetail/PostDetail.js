import { useLocation } from "react-router-dom";

import { Comments } from "./Comments.js";
import style from './PostDetail.module.css';

const PostDetail = () => {

    const { state: { id, userId, title, body } } = useLocation();
    
    return (
        <div className={style.PostDetail} >
            <div>Post Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <Comments id={id} />
        </div>
    )
};

export { PostDetail };