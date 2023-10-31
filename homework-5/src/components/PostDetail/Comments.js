import { useState } from "react";
import { useEffect } from "react";

import { usersServise } from '../../services/usersServise.js';
import { Comment } from "./Comment.js";
import style from './Comments.module.css'

const Comments = ({ id }) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        usersServise.getPostComments(id).then(({ data }) => setComments(data));
    }, [id]);

    return (
        <div className={style.Comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    )
};

export { Comments };