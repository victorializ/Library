import { useState, useEffect } from 'react';

function useRequest(query, params = [], shouldRequestData = true) {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState({message: null});
    const [ loading, setLoading ] = useState(shouldRequestData);

    useEffect(() => {
        if(shouldRequestData) {
            setData(null);
            setLoading(true);
            setError({message: null});
           
            query(...params)
                .then(({data}) => setData(data))
                .catch(err => setError(err))
                .finally(() => setLoading(false))
        }
    }, [...params]);

    return { data, error, loading };
}

export { useRequest };