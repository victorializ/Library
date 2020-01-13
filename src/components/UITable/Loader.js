import React from 'react';
import { Loader as SemanticLoader } from 'semantic-ui-react';

function Loader({ 
    loading = true
}) {
    return (
        loading && 
            <div className='center'>
                <SemanticLoader active inline='centered'/>
            </div>
    );
}

export { Loader };