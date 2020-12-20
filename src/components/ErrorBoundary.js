import React from 'react';
import { ErrorMessage } from './UITable/ErrorMessage';

class ErrorBoundary extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            error: '',
        };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage text={this.state.error.toString()} /> 
        }
        return this.props.children;
    }
}
export { ErrorBoundary };