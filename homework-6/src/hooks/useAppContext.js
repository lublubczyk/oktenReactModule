import { useContext } from "react";

import { Context } from "../hok";

const useAppContext = () => {
    
    const [state, setState] = useContext(Context);

    return {
        episode: state.episode,
        setEpisode: (data) => setState({ episode: data }),
        resetEpisode: () => setState({ episode: null })
    }

};

export { useAppContext };