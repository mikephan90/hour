import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, } from 'react-native-elements'

// Components
import Map from '../components/Map';
import SearchBar from '../components/SearchBar'

import useLocation from '../hooks/useLocation';
import { Context as LocationContext} from '../context/LocationContext.js';

const MapScreen = () => {
	const { addLocation } = useContext(LocationContext);
	const callback = useCallback(location => {
		addLocation(location);
	}, []);

	const [err] = useLocation(callback);

	return (
		<View>
			<Map />
			<View style={{ position: 'absolute'}}>
				<SearchBar />
			</View>
			{err ? <Text>Please enable location services</Text> : null}
		</View>
	);
};

export default MapScreen;
