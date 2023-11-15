import { axiosService } from "./axiosService";

import { urls } from "../constants";

const carAxiosService = {
    getAll: () => axiosService.get(urls.cars),
    createCar: (car) => axiosService.post(urls.cars, car),
    updateById: (id, car) => axiosService.put(urls.byId(id), car),
    deleteCarById: (id) => axiosService.delete(urls.byId(id))
};

export { carAxiosService };