import { urls } from "../constants/url";
import { axiosSpaceServise } from "./axiosServices";

const spaceServices = {
    getAll: () => axiosSpaceServise.get(urls.space.version + urls.space.launches)
};

export { spaceServices };