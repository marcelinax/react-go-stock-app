import axios from 'axios';
import { config } from './../config/Config';

export const apiClient = axios.create({
    baseURL: config.apiUrl + config.organizationId + '/',
    headers: {
        Authorization: config.apiToken
    }
});