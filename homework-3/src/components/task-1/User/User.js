import style from "./User.module.css"

const User = ({ user }) => {
    
    const { id, name, username, website } = user;
    
    return (
        <div className={style.User}>
            <h4>Id: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>User Name: {username}</h4>
            <h4>WebSite: { website }</h4>
        </div>
    )
};

export { User };