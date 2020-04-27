import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: result.image_url}} />
                <Text style={styles.name}>{result.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        margin: 10,
        backgroundColor: 'black',
        borderWidth: 0,
        borderColor: 'black',
        // shadowColor: '#1d1d1d',
        // shadowOpacity: 1,
        // shadowRadius: 3, 
        // shadowOffset: { width: 1, height: 1}
    },
    image: {
        alignSelf: 'center',
        width: "100%",
        height: Dimensions.get('window').height/3,
        opacity: .5,
    },
    name: {
        color: 'white',
        position: 'absolute',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    info: {
        marginLeft: 20,
        position: 'absolute',
        marginBottom: 15,
    }
});

export default ResultsDetail;