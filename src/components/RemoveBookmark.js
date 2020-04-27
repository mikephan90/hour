import React, { useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as BookmarkContext } from '../context/BookmarkContext';
import { Ionicons } from '@expo/vector-icons';
import useRemoveBookmark from '../hooks/useRemoveBookmark';

const RemoveBookmark = ({ bookmarker }) => {
    const { setBookmark } = useContext(BookmarkContext);
    const useHook = useRemoveBookmark(bookmarker);
    

    const removeBookmark = () => {
        setBookmark(bookmarker);
        useHook();
    }

    return (
        <View>
            <TouchableOpacity onPress={removeBookmark}>
                <Ionicons name="ios-search" size={40} color="red" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default RemoveBookmark;
