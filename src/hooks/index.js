
import { useState, useEffect } from 'react';

function useRequest(query, resolve, ...params) {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState('');

    const request = () => {
        setData(null);
        setError('');

        return query(...params)
            .then(({data}) => setData(data))
            .catch(err => setError(err))
            //.finilly(() => setError('err'))
    }
    
    useEffect(() => {
        if(resolve !== null) {
            request();
        }
      }, params);
    
    return [data, error];
}

export { useRequest };