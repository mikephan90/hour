import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator, View, Dimensions } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import mapStyle from '../../styles/mapStyle.json';

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);

	if (!currentLocation) {
		return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	}

	// TODO: MARKERS NEARBY HH 
	return (
		<View style={styles.container}>
			<MapView
				provider="google"
				style={styles.map}
				customMapStyle={mapStyle}
				showsUserLocation={true}
				followsUserLocation={true}
				showsMyLocationButton={true}
				initialRegion={{
					...currentLocation.coords,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			></MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		height: Dimensions.get('window').height,
	},
});

export default Map;
