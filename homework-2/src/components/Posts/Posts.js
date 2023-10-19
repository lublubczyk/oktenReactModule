import { useEffect, useState } from 'react';

import style from './Posts.module.css'
import { PostInf } from "../PostInf/PostInf"
import { postsServices } from '../../services/postsServices';
import { PostDetails } from '../PostDetails/PostDetails';

const Posts = () => {
    const [data, setData] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    
    useEffect(() => {
        postsServices.getAll().then(({ data }) => setData(data))
    }, []);
    
    const click = async (postId) => {
        const { data } = await postsServices.getById(postId);
        setPostDetails(data);
    };

    return (
        <div className={style.Post}>
            {data.map((post) => <PostInf key={post.id} post={post} click={click} />)}
            {postDetails && <PostDetails postDetails={postDetails} />}
        </div>
    );
};

export { Posts };