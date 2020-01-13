import React from 'react';
import { Loader } from './UITable/Loader';

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
            <Loader loading={loading} />
        </>
    );
}

export { LoadingComponent };