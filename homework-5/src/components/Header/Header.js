import { useNavigate } from "react-router-dom";

const Header = () => {
    
    const navigete = useNavigate();
    
    return (
        <div>
            <button onClick={() => navigete(-1)}>Prev</button>
            <button onClick={() => navigete(+1)}>Next</button>
        </div>
    )
};

export { Header };