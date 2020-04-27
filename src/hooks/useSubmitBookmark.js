import React, { useContext } from 'react';
import { Alert, Button } from 'react-native'
import { Context as BookmarkContext } from '../context/BookmarkContext';

export default () => {
    const { state: { bookmarkID }, submitBookmark } = useContext(BookmarkContext);

    const saveBookmark = async () => {
        try {
            await submitBookmark(bookmarkID)
            Alert.alert("Added to bookmarks!");
        } catch (err) {
            Alert.alert("Bookmark has already been added.");
        }
    }
    return saveBookmark;
};
