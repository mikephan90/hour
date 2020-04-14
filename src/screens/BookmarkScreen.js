import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

// Display empty page or bookmarks
function bookmarks() {
	// fill array from user database
	let bmList = [];

	// display empty page. if bm exist display them
	if( bmList.length === 0){
		return (
			<View>
				<Text>No bookmarks!</Text>
				<Button title="Add" />
			</View>
		)
	} else {
		return (
			<View>
				<Text>Add Flatlist</Text>
				<Text>Here to display</Text>
				<Text>all bookmarks</Text>
			</View>
		)
	}
};

const BookmarksScreen = () => {
	const { state: { status } } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset= {{ top: 'always' }}>
			<Text style={{ fontSize: 48 }}>Bookmarks</Text>
			<Spacer>
				{ status 
					? bookmarks()
					: (<Text>You must be signed in to see your bookmarks!</Text>)
				}
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default BookmarksScreen;
