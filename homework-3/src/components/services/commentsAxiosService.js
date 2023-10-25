import { urls } from "../constants/urls";
import { axiosService } from "./axiosService";

const commentsAxiosService = {
    getAll: () => axiosService.get(urls.comments),
    create: (comment) => axiosService.post(urls.comments, comment)
};

export { commentsAxiosService };