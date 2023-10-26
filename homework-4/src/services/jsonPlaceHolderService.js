import { urls } from "../constants/urls";
import { axiosService } from "./axiosService";

const jsonPlaceHolderServise = {
    getAllTodos: () => axiosService.get(urls.todos),
    getAllAlbums: () => axiosService.get(urls.albums),
    getAllComments: () => axiosService.get(urls.comments),
    getPostById: (id)=> axiosService.get(urls.byPostsId(id))
};

export { jsonPlaceHolderServise };