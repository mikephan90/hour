import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.info}>{result.rating} stars</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    image: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        borderRadius: 0,
        opacity: 0.4,
    },
    name: {
        shadowColor: 'red',
        color: 'white',
        position: 'absolute',
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 120,
        right: 30,

    },
    info: {
        shadowColor: 'red',
        color: 'white',
        position: 'absolute',
        fontSize: 15,
        fontWeight: 'bold',
        bottom: 100,
        right: 30,
    }
});

export default ResultsDetail;