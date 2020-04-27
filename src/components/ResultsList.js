import React from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    FlatList, 
    TouchableOpacity 
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { navigate } from '../navigationRef';

const ResultsList = ({ results }) => {
    if (!results.length) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                pagingEnabled
                keyExtractor={(result) => result.id}
                renderItem={( {item} ) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigate('MainStack', { 
                                screen: 'Business',
                                params: {
                                    screen: 'BusinessDetail',
                                    params: { id: item.id} 
                                }
                            })}
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity> 
                        )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;