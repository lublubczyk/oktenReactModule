import { useNavigate } from "react-router-dom";

import style from './User.module.css';

const User = ({ user }) => {
    
    const { id, name } = user;
    const navigate = useNavigate();
    
    return (
        <div className={style.User}>
            <div>User Id: {id}</div>
            <div>User Name: {name}</div>
            <button onClick={() => navigate(`user-details/${id}`)} >User Details</button>
        </div>
    )
};

export { User };