import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants';

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 25000,
  // withCredentials: true // send cookies when cross-domain requests
});

request.interceptors.request.use((config) => {
  const apiKey = process.env.VUE_APP_API_KEY || false;

  if (apiKey) {
    // TODO: Inject api key from process.env.VUE_APP_API_KEY
    if (config.headers?.common) {
      // eslint-disable-next-line no-param-reassign
      (config.headers.common as unknown as Record<string, string>).Authorization = apiKey;
    }
  }
  return config;
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

export class Api {
  static get = <T = unknown>(url: string, options?: AxiosRequestConfig) => request.get<unknown, T>(`${API_URL}/${url}`, options);

  static post = <T>(url: string, data?: ApiObject, options?: AxiosRequestConfig) => request.post<unknown, T>(`${API_URL}/${url}`, data, options);

  static patch = <T = void>(url: string, data?: ApiObject) => request.patch<unknown, T>(`${API_URL}/${url}`, data);

  static put = <T>(url: string, data?: ApiObject) => request.put<unknown, T>(`${API_URL}/${url}`, data);

  static delete = <T = void>(url: string, data?: ApiObject) => request.delete<unknown, T>(`${API_URL}/${url}`, { data });
}
