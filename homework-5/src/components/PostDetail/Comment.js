import style from './Comment.module.css';

const Comment = ({ comment }) => {
    
    const { postId, id, name, email, body } = comment;

    return (
        <div className={style.Comment}>
            <div>PostId: {postId}</div>
            <div>Comment id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    )
};

export { Comment };