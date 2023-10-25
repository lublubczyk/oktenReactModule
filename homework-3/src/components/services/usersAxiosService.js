import { axiosService } from "./axiosService";
import { urls } from "../constants/urls";

const usersAxiosServise = {
    getAll: () => axiosService.get(urls.users),
    create: (user) => axiosService.post(urls.users, user)
};

export { usersAxiosServise };