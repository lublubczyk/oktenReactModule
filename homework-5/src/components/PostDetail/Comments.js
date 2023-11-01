import { useLoaderData } from "react-router-dom";

import { Comment } from "./Comment.js";
import style from './Comments.module.css';

const Comments = () => {
    
    const { data: comments } = useLoaderData();
    
    return (
        <div className={style.Comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    )
};

export { Comments };