import { useSelector } from "react-redux";

import { Episodes } from "../components";

const EpisodePage = () => {

    const { errors } = useSelector(state => state.episodes);
    
    return (
        <div>
            {errors && <h1>Error: {errors.error}: something went wrong</h1>}
            <Episodes />
        </div>
    )
};

export { EpisodePage };