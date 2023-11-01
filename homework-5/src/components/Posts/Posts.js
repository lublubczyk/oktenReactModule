import { useEffect, useState } from "react";

import { Post } from "./Post";
import { usersServise } from "../../services/usersServise";
import style from './Posts.module.css';

const Posts = ({ id }) => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        usersServise.getUserPosts(id).then(({ data }) => setPosts(data));
    }, [id]);

    return (
        <div className={style.Posts}>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
};

export { Posts };