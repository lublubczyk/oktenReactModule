import { useEffect, useState } from "react";

import { Comment } from "../Comment/Comment";
import { jsonPlaceHolderServise } from "../../../services/jsonPlaceHolderService";
import style from "./Comments.module.css";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        jsonPlaceHolderServise.getAllComments().then(({ data }) => setComments(data));
    },[])

    return (
        <div className={style.Comments} >
            {comments.map(comment => <Comment key={comment.id} comment={comment } />)}
        </div>
    )
};

export { Comments };