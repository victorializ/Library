import axios from 'axios';
import { store } from '../../redux/store';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://localhost:44314/api',
  responseType: 'json'
});

instance.interceptors.request.use(
  (config) => {
   const AUTH_TOKEN = JSON.stringify(store.getState().user.token);
   if (AUTH_TOKEN) {
    config.headers['Authorization'] = AUTH_TOKEN;
   }
    return config;
  }, error => Promise.reject(error)
);

export function get(path) {
  return instance.get(path);
}

export function patch(url, data) {
  return instance.patch(url, data);
}

export function post(url, data) {
  return instance.post(url, data);
}

export function remove(url, data) {
  return instance.delete(url, data);
}

export function put(url, data) {
  return instance.put(url, data);
}