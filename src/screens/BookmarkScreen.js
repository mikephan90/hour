import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import DisplayBookmark from '../components/DisplayBookmarks';

import { BottomNavigation, BottomNavigationItem } from 'material-bread';

// Display empty page or bookmarks
const BookmarksScreen = () => {
	const { state: { status } } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset= {{ top: 'always' }} style={styles.container}>
			<Text style={styles.text}>Bookmarks</Text>
			<Spacer>
				{ status 
					? (<DisplayBookmark />)
					: (<Text>You must be signed in to see your bookmarks!</Text>)
				}
			</Spacer>
		</SafeAreaView>
		
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#aac8ff',
		flex: 1,
	},
	text: {
		color: 'white',
		marginLeft: 15,
		fontSize: 30,
	}
});

export default BookmarksScreen;
