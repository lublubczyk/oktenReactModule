import { useEffect } from "react";

import { Comment } from "../Comments/Comment";
import { commentsAxiosService } from "../../services/commentsAxiosService";
import style from "./ShowComments.module.css"

const ShowComments = ({comments, setComments}) => {
    
    useEffect(() => {
        commentsAxiosService.getAll().then(({ data }) => setComments(data));
    }, []);

    return (
        <div className={style.ShowComments}>
            {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
        </div>
    )
};

export { ShowComments };