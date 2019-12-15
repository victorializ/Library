import React from 'react';

import { Loader } from 'semantic-ui-react';
import { ErrorMessage } from '../UITable/ErrorMessage';

function LoadingComponent(props) {
    const { WrappedComponent, data, error: { message } } = props;
    
    return (
        data || message ? 
            message ? 
                <ErrorMessage text={message} /> 
                    :
                <WrappedComponent data={data} {...props} />  
                : 
            <div className='center'>
                <Loader active inline='centered'/>
            </div>
    )
}

export { LoadingComponent };