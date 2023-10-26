import { useEffect, useState } from "react";

import { jsonPlaceHolderServise } from "../../../services/jsonPlaceHolderService";

const Post = ({ id: postId }) => {
    
    const [post, setPost] = useState([]);

    useEffect(() => {
        jsonPlaceHolderServise.getPostById(postId).then(({ data }) => setPost(data));
    }, [postId]);
     
    const { userId, title, body } = post;

    return (
        <div>
            <div>Post Id: {postId}</div>
            <div>User Id: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    )
};

export { Post };