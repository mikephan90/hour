import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Button, ListItem, Card } from 'react-native-elements';
import { Context as StoreContext } from '../context/StoreContext';
import { navigate } from '../navigationRef';

const DisplayReviews = () => {

    const reviews = []

    const showReviews = () => {
        if( reviews.length === 0){
            return (
                <View>
                    <Text>No Reviews!</Text>
                    <Text>Be the first to add a review!</Text>
                </View>
            )
        } else {
            return ( 
                <View style={styles.container}>
                    <Text>askdfjalsd</Text>
                </View>
            )
        }
    }

    return (
        <>
            {showReviews()}
        </>
    )
};

const styles = StyleSheet.create({

});


export default DisplayReviews;