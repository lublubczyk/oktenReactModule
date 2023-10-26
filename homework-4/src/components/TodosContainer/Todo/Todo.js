import style from "./Todo.module.css";

const Todo = ({ todo }) => {
    
    const { id, userId, title, completed } = todo;

    return (
        <div className={style.Todo}>
            <div>Id: {id}</div>
            <div>User Id: {userId}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed ? 'true' : 'false'}</div>
        </div>
    )
};

export { Todo };