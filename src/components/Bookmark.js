import React, { useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as BookmarkContext } from '../context/BookmarkContext';
import useSubmitBookmark from '../hooks/useSubmitBookmark';
import { Ionicons } from '@expo/vector-icons';

const Bookmark = ({ bookmarker }) => {
    const { setBookmark } = useContext(BookmarkContext);
    const useHook = useSubmitBookmark();
    
    const saveBookmark = () => {
        setBookmark(bookmarker);
        useHook();
    };

    return (
        <View>
            <TouchableOpacity onPress={saveBookmark}>
                <Ionicons name="ios-bookmark" size={40} color="red" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default Bookmark;
