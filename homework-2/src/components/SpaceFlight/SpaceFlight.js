import style from "./SpaceFlight.module.css";

const SpaceFlight = ({ flight: { mission_name, launch_year, mission_patch_small } }) => {
    return (
        <div className={style.SpaceFlight}>
            <h4>Name: {mission_name}</h4>
            <h4>Launch year: {launch_year}</h4>
            <img src={mission_patch_small} alt={mission_name}></img>
            <h4>Link image: {mission_patch_small}</h4>
        </div>
    );
};

export { SpaceFlight };