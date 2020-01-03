import React from 'react';
import { Loader } from 'semantic-ui-react';

import { ErrorMessage } from './UITable/ErrorMessage';
import { DefaultSuccessMessage } from './UITable/SuccessMessage';

function LoadingComponent({ 
    data, 
    error: { message },
    loading,
    children = DefaultSuccessMessage
}) {
    return (
        <>
            { message && <ErrorMessage text={message} /> }
            { data && children }
            { loading && 
                <div className='center'>
                    <Loader active inline='centered'/>
                </div>
            }
        </>
    );
}

export { LoadingComponent };