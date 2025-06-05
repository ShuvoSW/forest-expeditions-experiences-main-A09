import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {user} = useContext(AuthContext);

    const location = useLocation();

    if(user && user?.email){
       return children;
    }
    return (
        <div>
            <Navigate state={location} to={"/signup"}></Navigate>
        </div>
    );
};

export default PrivateRouter;