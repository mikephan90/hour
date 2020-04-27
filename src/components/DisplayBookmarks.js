import React, { useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { Context as BookmarkContext } from '../context/BookmarkContext';
import RemoveBookmark from './RemoveBookmark';
import { Card, CardContent, CardActions } from 'material-bread';
import { navigate } from '../navigationRef';
import { Ionicons, Feather } from '@expo/vector-icons';

const DisplayBookmark = () => {
    const { state: { bookmarks }, getBookmarks } = useContext(BookmarkContext);
    let bml = bookmarks.length;

    console.log(bml)
    console.log(bookmarks)

    // Callback to update on bookmark change
    useEffect(() => {
        if ( bml > bookmarks.length || bml < bookmarks.length || bookmarks === 0)
            getBookmarks();
    }, [bml]);

    // Show list of bookmarks if exists
    const bookmarkList = () => {
        if( bookmarks.length === 0){
            return (
                <View style={styles.container}>
                    <Card shadow={5}>
                        <CardContent>
                            <Text style={{ textAlign: 'center' }}>NO SAVED BOOKMARKS!</Text>
                            <Ionicons name="ios-bookmark" style={styles.iconStyle} />
                            <Text style={{ textAlign: 'center' }}>Save your favorite businesses here!</Text>
                        </CardContent>
                    </Card>
                </View>
            )
        } else {
            return ( 
                <View style={styles.container}>
                    <FlatList 
                        data={bookmarks}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => { 
                            return (
                                <View style={styles.row}>
                                    {/* <TouchableOpacity onPress={() => navigate('MainStack', { 
                                        screen: 'Business',
                                        params: {
                                            screen: 'BusinessDetail',
                                            params: { id: item.id }
                                        }
                                    })}
                                    >
                                        <Text>{item.name}</Text>
                                        <View style={styles.detailContainer}>
                                            <Image style={styles.image} source={{ uri: item.photos[0] }} />
                                            <Text>{item.display_phone}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <RemoveBookmark bookmarker={item.id}/> */}
                                    <Card onPress={() => navigate('MainStack', { 
                                        screen: 'Business',
                                        params: {
                                            screen: 'BusinessDetail',
                                            params: { id: item.id }
                                        }
                                    })}>
                                        <Text>{item.name}</Text>
                                        <View style={styles.detailContainer}>
                                            <Image style={styles.image} source={{ uri: item.photos[0] }} />
                                            <Text>{item.display_phone}</Text>
                                        </View>
                                    </Card>
                                    <RemoveBookmark bookmarker={item.id}/>
                                </View>
                            )
                        }}
                    />
                </View>
            )
        }
    }

    return (
        <>
                {bookmarkList()}
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        marginBottom: 5,
    },
    detailContainer: {
        flexDirection: 'row',
    },
    image: {
        height: 40,
        width: 50,
        margin: 5,
    },
    row: {
        marginVertical: 3,
    },
    iconStyle: {
        color: 'blue',
        fontSize: 150,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
});


export default DisplayBookmark;