import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import { Context as LocationContext} from '../context/LocationContext.js';

const MapScreen = () => {
	const { addLocation } = useContext(LocationContext);
	const callback = useCallback(location => {
		addLocation(location);
	}, []);

	const [err] = useLocation(callback);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}
		</SafeAreaView>
	);
};

export default MapScreen;
