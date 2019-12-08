import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';

import { ErrorMessage } from '../index';

import './style.scss';

function useRequest(request, ...params) {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState('');
    
    useEffect(() => {
        setData(null);
        request(...params)
            .then(({data}) => setData(data))
            .catch(err => setError(err));
      }, [request, ...params]);
    
    return [data, error];
}

function WithRequest (props) {
    const { WrappedComponent, data, error: { message } } = props;

    return (
        data || message ? 
            message ? 
                <ErrorMessage text={message} /> 
                    :
                <WrappedComponent data={data} {...props} />  
                : 
            <div className='request-loader'>
                <Loader active inline='centered'/>
            </div>
    )
}

export { WithRequest, useRequest };