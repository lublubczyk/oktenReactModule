import { useState, useEffect } from "react";

import { Album } from "../Album/Album";
import { jsonPlaceHolderServise } from "../../../services/jsonPlaceHolderService";
import style from "./Albums.module.css"; 

const Albums = () => {
  
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        jsonPlaceHolderServise.getAllAlbums().then(({ data }) => setAlbums(data));
    }, []);

    return (
        <div className={style.Albums}>
            {albums.map(album => <Album key={album.id} album={album} />)}
        </div>
    )
};

export { Albums };