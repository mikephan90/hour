import React, { useEffect, useContext } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
    Dimensions,
    Animated
} from 'react-native';
import FeaturedDetail from './FeaturedDetail';
import { navigate } from '../navigationRef';
import useResults from '../hooks/useResults';
import { Context as LocationContext } from '../context/LocationContext';
import { ScrollView } from 'react-native-gesture-handler';

const deviceHeight = Dimensions.get('window').height

const FeaturedList = () => {
    const { state: { currentLocation } } = useContext(LocationContext);
    const [searchApi, results] = useResults();

    // Call default search for nearby happy hour locations
    useEffect(() => {
		searchApi('');
	}, [currentLocation]);

    if (!results.length) {
        return null;
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={( {item} ) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigate('MainStack', { 
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
                scrollEventThrottle={10}
                pagingEnabled
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { y: deviceHeight }}}]
                    )
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        position: 'absolute',
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    container: {
        marginBottom: 10
    }
});

export default FeaturedList;