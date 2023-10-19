import axios from "axios";

import { baseURL, spaceBaseURL } from "../constants/url";

const axiosService = axios.create({ baseURL });
const axiosSpaceServise = axios.create({ baseURL: spaceBaseURL });

export { axiosService, axiosSpaceServise };