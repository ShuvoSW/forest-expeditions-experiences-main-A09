import { Navigate } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Error</h2>
            <Navigate to="/">Home</Navigate>
        </div>
    );
};

export default ErrorPage;