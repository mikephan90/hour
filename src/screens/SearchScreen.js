import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '..//components/ResultsList';
import { navigate } from '../navigationRef';

const SearchScreen = () => {
	const [term, setTerm] = useState('');	
	const [search, setSearch] = useState(true);
	const [searchApi, results, errorMessage] = useResults();

	// Display results 
	const showSearch = () => {
		return (
			<View>
				<ResultsList 
					results={results}
				/>
			</View>
		)
	};
	
	// Default options quick search options
	const happyHourTypes = () => {
		return (
			<View style={styles.container}>
				<Text style={{ fontSize: 20, paddingBottom: 14}}>QUICK FIND</Text>
				<TouchableOpacity onPress={() => { searchApi("beer"); setSearch(false);}}>
					<Text style={styles.preselectedList}>BEER</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { searchApi("wine"); setSearch(false)}}>
					<Text style={styles.preselectedList}>WINE</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { searchApi("cocktails"); setSearch(false)}}>
					<Text style={styles.preselectedList}>COCKTAILS</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { searchApi("food"); setSearch(false)}}>
					<Text style={styles.preselectedList}>FOOD</Text>
				</TouchableOpacity>
			</View>
			
		)
	};

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<View>
				<View style={styles.backgroundStyle}>

					<TouchableOpacity 
						style={styles.iconStyle} 
						onPress={() => { 
							navigate('Home'); 
							setSearch(true); 
							}
						}
					>
						<Feather name="x" style={styles.iconStyle} />
					</TouchableOpacity>

					<SearchBar 
						term={term} 
						/*onTermChange={newTerm => setTerm(newTerm)}  */
						/*onTermSubmit={() => searchApi()} */
						onTermChange={setTerm}
						onTermSubmit={() => {searchApi(term); setSearch(false)}}
					/>
				</View>
				{ errorMessage ? <Text>{errorMessage}</Text> : null }
				{ search ? happyHourTypes() : showSearch() }
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 100,
	},
	backgroundStyle: {
        marginTop: 10,
        flexDirection: 'row',
        height: 50,
    },
	preselectedList: {
		margin: 5,
		color: '#5b5b5b'
	},
	iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 5
    }
})

export default SearchScreen;