import { useNavigate } from "react-router-dom";

import style from './Post.module.css';

const Post = ({ post }) => {
    
    const { id, title } = post;
    
    const navigete = useNavigate();

    return (
        <div className={style.Post}>
            <div>Post Id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => navigete('post-detail', { state: post })}>Post Comment</button>
        </div>
    )
};

export { Post };