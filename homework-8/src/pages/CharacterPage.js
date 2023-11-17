import { useSelector } from "react-redux";

import { Characters } from "../components";

const CharacterPage = () => {

    const { errors } = useSelector(state => state.episodes);

    return (
        <div>
            {errors && <h1> Error: {errors.error}: come back to episodes </h1>}
            <Characters />
        </div>

    )
};

export { CharacterPage };
