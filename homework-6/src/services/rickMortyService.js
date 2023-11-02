import { urls } from "../constants";
import { axiosService } from "./axiosService";

const rickMortyService = {
    getAllEpisodes: (page = '1') => axiosService.get(urls.episode, { params: { page } }),
    getAllCharacters: (arr) => axiosService.get(urls.characters(arr))
};

export { rickMortyService };