import { urls } from "../constants/url";
import { axiosService } from "./axiosServices";

const postsServices = {
    getAll: () => axiosService.get(urls.users.posts),
    getById: (id) => axiosService.get(urls.users.byId(id))
};

export { postsServices };