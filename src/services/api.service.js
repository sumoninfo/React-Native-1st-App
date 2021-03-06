import axios      from 'axios';
import JwtService from "./jwt.service";
import {REACT_APP_API_URL} from "@env"

const ApiService = {
    init() {
        axios.defaults.baseURL                         = REACT_APP_API_URL + "/api/v1/";
        // axios.defaults.headers.common["Authorization"] = `Bearer ${JwtService.getToken()}`;
    },

    get(resource, params) {
        return axios.get(`${resource}`, params);
    },

    post(resource, params) {
        return axios.post(`${resource}`, params);
    },

    update(resource, params) {
        return axios.put(`${resource}`, params);
    },

    delete(resource, params) {
        return axios.delete(resource);
    },
};

export default ApiService;
