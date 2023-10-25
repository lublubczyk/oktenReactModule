import { urls } from "../constants/urls";
import { axiosServiceCars } from "./axiosService";

const carsAxiosService = {
    getAll: () => axiosServiceCars.get(urls.carsUrl.cars),
    create: (car) => axiosServiceCars.post(urls.carsUrl.cars, car),
    updateById: (id, car) => axiosServiceCars.put(urls.carsUrl.byId(id), car),
    deleteById: (id) => axiosServiceCars.delete(urls.carsUrl.byId(id))
};

export { carsAxiosService };