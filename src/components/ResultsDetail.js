import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.info}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        alignSelf: 'center',
        width: "90%",
        height: 300,
        borderRadius: 0,
        marginBottom: 5
    },
    name: {
        marginLeft: 20,
        fontWeight: 'bold',
    },
    info: {
        marginLeft: 20,
        marginBottom: 15,
    }
});

export default ResultsDetail;