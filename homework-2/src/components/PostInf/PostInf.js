import style from './PostInf.module.css';

const PostInf = ({ post, click }) => {
    const { id, title } = post;
    return (
        <div className={style.PostInf}>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button className={style.Button} onClick={() => click(id)}>Show Details</button>
        </div>
    );
};

export { PostInf };