import React, { useContext } from 'react';
import { Alert, Button } from 'react-native'
import { Context as BookmarkContext } from '../context/BookmarkContext';

export default ( bID ) => {
    const { removeBookmark } = useContext(BookmarkContext);

    const deleteBookmark = async () => {
        try {
            await removeBookmark(bID);
            Alert.alert("Removed bookmark!");
        } catch (err) {
            console.log("Removed Bookmark error")
            console.log(bID)
        }
    }
    return deleteBookmark;
};
