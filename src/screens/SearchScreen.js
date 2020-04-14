import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '..//components/ResultsList';


const SearchScreen = ({ navigation }) => {
	const [term, setTerm] = useState('');	
	const [search, setSearch] = useState(true);
	const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '%' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
	};

	const showSearch = () => {
		return (
			<View>
				<ResultsList 
					results={filterResultsByPrice('$')}
					navigation={navigation}
				/>
			</View>
		)
	};
	
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
							navigation.navigate('Home'); 
							setSearch(true); 
							setTerm('')}
						}
					>
						<Feather name="x" style={styles.iconStyle} />
					</TouchableOpacity>

					<SearchBar 
						navigation={navigation}
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