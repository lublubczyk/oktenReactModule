import style from "./Comment.module.css";

const Comment = ({ comment }) => {
    const { id, postId, name, body, email } = comment;
    return (
        <div className={style.Comment}>
            <h4>Comment Id: {id}</h4>
            <h4>Post Id: {postId}</h4>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Body: {body}</h4>
        </div>
    )
};

export { Comment };