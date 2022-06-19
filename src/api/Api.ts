import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants';

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 25000,
  // withCredentials: true // send cookies when cross-domain requests
});

request.interceptors.response.use(
  (response) => {
    if ((response.status < 200 || response.status >= 300)) {
      return Promise.reject(new Error(`Error`));
    }

    return response.data;
  },
  (error) => {
    // Global error handling
    throw error;
  },
);

export type ApiObject = Record<string, unknown>;

const apiKey = process.env.VUE_APP_API_KEY;

export class Api {
  static get = <T = unknown>(method: string, options?: AxiosRequestConfig) => (
    request.get<unknown, T>(`${API_URL}/?method=${method}&api_key=${apiKey}&format=json`, options)
  );
}
