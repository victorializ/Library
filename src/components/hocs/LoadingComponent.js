import React, { Fragment } from 'react';
import { Loader } from 'semantic-ui-react';

import { ErrorMessage } from '../UITable/ErrorMessage';
import { DefaultSuccessMessage } from '../UITable/SuccessMessage';

function LoadingComponent({ 
    data, 
    error: { message },
    loading,
    children = DefaultSuccessMessage
}) {
    return (
        <Fragment>
            { message && <ErrorMessage text={message} /> }
            { data && React.cloneElement(children, data={data}) }
            { loading && 
                    <div className='center'>
                        <Loader active inline='centered'/>
                    </div>
            }
        </Fragment>
    );
}

export { LoadingComponent };