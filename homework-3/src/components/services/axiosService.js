import axios from "axios";

import { baseURL, urls } from "../constants/urls";

const axiosService = axios.create({ baseURL });
const axiosServiceCars = axios.create({ baseURL: urls.carsUrl.baseURL });

export { axiosService, axiosServiceCars };