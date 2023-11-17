import { axiosService } from "./axiosService";
import { urls } from "../constants";

const rickMortyService = {
    getAllEpisodes: (page = '1') => axiosService.get(urls.episode, { params: { page } }),
    getAllCharacters: (ids) => axiosService.get(urls.characters(ids))
};

export { rickMortyService };