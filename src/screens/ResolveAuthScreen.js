import React, { useContext, useCallback, useEffect } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as AuthContext } from '../context/AuthContext';
import useLocation from '../hooks/useLocation';

const ResolveAuthScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const { tryLocalSignin, getUserInfo } = useContext(AuthContext);

	const callback = useCallback(location => {
		addLocation(location);
	}, []);
    useLocation(callback);

    useEffect(() => {
        tryLocalSignin();
        getUserInfo();
    }, []);

    return null;
};

export default ResolveAuthScreen;