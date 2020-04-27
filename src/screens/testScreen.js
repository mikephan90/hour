import React, { useEffect, useContext } from 'react';
import { Animated, View, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { navigate } from '../navigationRef';
import useResults from '../hooks/useResults';
import { Context as LocationContext } from '../context/LocationContext';
import FeaturedDetail from '../components/FeaturedDetail';

const deviceHeight = Dimensions.get('window').height;


const testScreen = () => {
    const { state: { currentLocation } } = useContext(LocationContext);
    const [searchApi, results] = useResults();

    useEffect(() => {
        searchApi('');
    }, [currentLocation]);

    if (!results.length) {
        return null;
    }

    return (
        <View>
            <FlatList
                horizontal={false}
                showsVerticalScrollIndicator={false}
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
                        [{ nativeEvent: { contentOffset: { x: deviceHeight }}}]
                    )
                }
            />
        </View>
    );
}


export default testScreen;