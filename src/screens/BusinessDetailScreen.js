import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import yelp from '../api/yelp';
import Bookmark from '../components/Bookmark';
import DisplayReviews from '../components/DisplayReviews';
import Spacer from '../components/Spacer';

const BusinessDetail = ({ route }) => {
    const [result, setResult] = useState();
    const id = route.params.id;

    const getResult =  async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    };

    const displayInfo = () => {
        let link = result.url;
        const jsonResult = JSON.stringify(result);
        return (
            <View>
                <Text>{result.location.address1}</Text>
                <Text>{result.location.city}, {result.location.state}, {result.location.zip_code}</Text>
                <Text>{result.display_phone}</Text>
                <Text>Reviews: {result.rating}</Text>
                <TouchableOpacity><Text>Go to site!</Text></TouchableOpacity>
                <Bookmark bookmarker={jsonResult}/>
            </View>
        )
    }

    return (
            <View style={styles.container}>
                <Text h4>{result.name}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={styles.image} source={{ uri: item }} />
                    }}
                />
                { displayInfo() }
                { !result.is_closed ? <Text>OPEN NOW!</Text> : <Text>CLOSED!</Text>}
                <Spacer>
                    { <DisplayReviews /> }
                </Spacer>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        margin: 4,
        height: 200,
        width: Dimensions.get('screen').width,
    }
});

export default BusinessDetail;