import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import FeaturedDetail from './FeaturedDetail';

const FeaturedList = ({ results, navigation }) => {

    if (!results.length) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={( {item} ) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MainStack', { 
                                screen: 'Business',
                                params: {
                                    screen: 'BusinessDetail',
                                    params: { id: item.id }
                                }
                            })}
                        >
                            <FeaturedDetail result={item} />
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

export default withNavigation(FeaturedList);