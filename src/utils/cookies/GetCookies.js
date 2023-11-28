/* eslint-disable */
import React from 'react';
import { Navigate } from 'react-router-dom';

export const isAuthenticate = () => {
    if (localStorage.getItem('userWebRtc') !== undefined) {
        const token = JSON.parse(localStorage.getItem('userWebRtc'));
        if (!token) {
                return <Navigate to={'/login'} />;
            }
            return token;
    } else {
        return 0;
    }
};
/* eslint-disable */