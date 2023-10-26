import { useLocation } from "react-router-dom";

import { Post } from "../components/Postcontainer/Post/Post";


const PostPages = () => {

    const { state: id } = useLocation();
     
    return (
        <div>
            <Post id={id} />
        </div>
    )
};

export { PostPages };