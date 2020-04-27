import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'
import useResults from '../hooks/useResults';
import FeaturedList from '../components/FeaturedList';

import { BottomNavigation } from 'material-bread';


const HomeScreen = ()=> {
    const [results] = useResults();

    return (
        <View style={{ flex: 1, backgroundColor: '#1d1d1d'}}>
            <FeaturedList results={(results)} />
            <Text style={styles.heading}>FEATURED NEARBY</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        top: "5%",
        left: 10,
        opacity: 1,
        shadowOpacity: .4,
        
    }
});

export default HomeScreen;