import { sorting } from '../types';

export const compose = (...funcs) => 
    arg => funcs.reduce((acc, current) => current(acc), arg); 

export const compare = ((a, b, sort, field, direction = sorting) => 
    sort === direction.asc ?
        a[field] < b[field] ? -1 : 1 : 
        a[field] > b[field] ? -1 : 1
);

export const promisify = (data, error = '', delay = 1000) => 
    new Promise((resolve, reject) => 
        setTimeout(() => error ? reject(error) : resolve(data), 
    delay) 
);