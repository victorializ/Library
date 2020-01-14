import axios from 'axios';
import { store } from '../../../redux/store';
//import { useUser } from '../../../hooks'; // It is not allowed to use hooks here

/*
It looks like I can't get value of context outside of the component tree :(, 
I can't subscribe to it everywhere like to redux store 
So I'll probably leave with redux for now
*/

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'http://localhost:44393/api',
  responseType: 'json'
});

instance.interceptors.request.use(
  config => {
    const AUTH_TOKEN = store.getState().user.token;
    if (AUTH_TOKEN) {
      config.headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;
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