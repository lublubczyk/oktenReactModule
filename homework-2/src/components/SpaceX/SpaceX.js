import { useEffect, useState } from "react";

import { SpaceFlight } from "../SpaceFlight/SpaceFlight";
import style from "./SpaceX.module.css";
import { spaceServices } from "../../services/spaceServices";
import { filterSpaceAxios } from "../../services/filrerSpaceAxios";

const SpaceX = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        spaceServices.getAll().then(({ data }) => setData(filterSpaceAxios(data)));
    }, []);
    
    return (
        <div className={style.SpaceX}>
            {data.map((val, ind) => <SpaceFlight key={ind} flight={val} />)}
        </div>
    );
};

export { SpaceX };