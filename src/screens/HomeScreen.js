import React, { useState, useContext, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'
import useResults from '../hooks/useResults';
import FeaturedList from '../components/FeaturedList';

const HomeScreen = ({ navigation })=> {

    const [searchApi, results] = useResults();
    //filter by rating nearby
    const filterResultsByPrice = (price) => {
        // price === '%' || '$$' || '$$$'
        return results
    };

    return (
        <SafeAreaView>
            <Text h4>Featured Nearby</Text>
                <FeaturedList 
                    navigation={navigation}
                    results={filterResultsByPrice('')}
                />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default HomeScreen;