import createDataContext from './createDataContext';
import { AsyncStorage } from 'react-native';

/** 
 * Bookmarks are unique per user
 */

const bookmarkReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Retrieve bookmarks from API server, unique to user token
const getBookMark = dispatch => async() => {
    const token = await AsyncStorage.getItem('token');
    // call server API to retrieve token and bookmarks user has stored as array
    // return bookmarks to be displayed in screen
};

// Submit bookmarks from API server, unique to user token
// TODO: add bookmark entry as variable to function
const submitBookmark = dispatch => () => {
    const token = await AsyncStorage.getItem('token');
    // error out if token doesn't exist. this shouldn't show up anyways if signed in
    // submit token to API server along with bookmark entry (array?)
    // if submission successful - display to user confirmation
};

export const { Provider, Context } = createDataContext(
    bookmarkReducer,
    { getBookMark, submitBookmark },
    { bookmarks: []}
)