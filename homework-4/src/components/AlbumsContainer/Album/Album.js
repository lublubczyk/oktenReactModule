import style from "./Album.module.css";

const Album = ({ album }) => {
    
    const { userId, id, title } = album;

    return (
        <div className={style.Album} >
            <div>Id:{id}</div>
            <div>User Id:{userId}</div>
            <div>Title:{title}</div>
        </div>
    )
};

export { Album };