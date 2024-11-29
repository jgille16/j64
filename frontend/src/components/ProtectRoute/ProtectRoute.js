import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Check if token exists
    if (!token) {
        // If no token in localStorage, redirect to login
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectRoute;
