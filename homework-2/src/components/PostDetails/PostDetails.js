import style from './PostDetails.module.css';

const PostDetails = ({postDetails}) => {
    return (
        <div className={style.PostDetails}>
            {Object.keys(postDetails).map((keys, ind) => {
                return <h4 key={ind} >
                    {keys[0].toUpperCase() + keys.slice(1)} : {postDetails[keys]}
                </h4>
            })}
        </div>
    );
};

export { PostDetails };