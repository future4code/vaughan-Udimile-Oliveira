import axios from "axios";
import { api_key_bonita, language } from "../constants/apiKEY";
import { BASE_URL } from "../constants/URL";

const api = axios.create({
    baseURL: BASE_URL
})

api.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        api_key: api_key_bonita,
        language: language
    };

    return config;
})

export default api;