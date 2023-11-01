import { urls } from "../constants/urls";
import { axiosService } from "./axiosService";

const commentsServise = {
    getPostComments: (id) => axiosService.get(urls.postComments(id))
};

export { commentsServise };