import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div>
            <h1 className='text-center text-4xl'>Loading</h1>
        </div>
    }

    if (user && user?.email) {
        return children;
    }
    return (
        <div>
            <Navigate state={location} to={"/signup"}></Navigate>
        </div>
    );
};

export default PrivateRouter;