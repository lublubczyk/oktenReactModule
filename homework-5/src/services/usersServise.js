import { urls } from "../constants/urls";
import { axiosService } from "./axiosService";

const usersServise = {
    getAllUsers: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(urls.userId(id)),
    getUserPosts: (id) => axiosService.get(urls.userPosts(id))
};

export { usersServise };