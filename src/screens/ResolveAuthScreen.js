import React, { useContext, useCallback, useEffect } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as AuthContext } from '../context/AuthContext';
import useLocation from '../hooks/useLocation';
import { navigate } from '../navigationRef';


const ResolveAuthScreen = ({ navigation }) => {
    const { addLocation } = useContext(LocationContext);
    const { tryLocalSignin } = useContext(AuthContext);

	const callback = useCallback(location => {
		addLocation(location);
	}, []);

    useLocation(callback);
    navigation.navigate('MainStack')

    // useEffect(() => {
    //     tryLocalSignin(navigation);
    // }, []);

    return null;
};

export default ResolveAuthScreen;