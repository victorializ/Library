import React from 'react';
import { ErrorMessage } from './UITable/ErrorMessage';

class ErrorBoundary extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        return (
            this.state.error ? 
                <ErrorMessage text={this.state.error} /> 
            : 
                this.props.children
        );
    }
}
export { ErrorBoundary };