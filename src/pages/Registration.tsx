import React from 'react';
import { Guser } from '../app/model';
import { useSelector } from 'react-redux';
import { selectSosUser } from '../features/counter/userSlice';

const Registration = () => {
    const sosUser: Guser = useSelector(selectSosUser)

    return (
        <div>
            <h1>, to be used in future, so we dont restrict to just google authentication</h1>
            
        </div>
    );
};

export default Registration;