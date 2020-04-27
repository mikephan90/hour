import createDataContext from './createDataContext';
import hourApi from '../api/hour';

/** 
 * Bookmarks are unique per user, must be logged in anyways so
 * need to submit token
 */

const bookmarkReducer = (state, action) => {
    switch (action.type) {
        case 'get_bookmarks':
            return { ...state, bookmarks: action.payload};
        case 'set_bookmark':
            return { ...state, bookmarkID: action.payload }
        default:
            return state;
    }
};

// Retrieve bookmarks from API server, unique to user token
const getBookmarks = dispatch => async () => {
    // call server API to retrieve token and bookmarks user has stored as array
    // return bookmarks to be displayed in screen
    // try {
        const response = await hourApi.get('/bookmarks');
        dispatch({ type: 'get_bookmarks', payload: response.data })
    // } catch (err) {
    //     console.log("Already updated")
    // }
};

// Set current bookmark ID
const setBookmark = dispatch => (bookmarked) => {
    dispatch({ type: 'set_bookmark', payload: bookmarked });
}

// Submit bookmarks from API server, unique to user token
// TODO: Need to return error correctly upon duplicate. Atm returns successful
const submitBookmark = dispatch =>  async (bookmarked) => {
    console.log(bookmarked)
    let parsed = JSON.parse(bookmarked);
    console.log(parsed)
    // await hourApi.post('/addbookmark', { parsed } );
    // const response = await hourApi.get('/bookmarks');
    // dispatch({ type: 'get_bookmarks', payload: response.data })
};

// Remove bookmark from user's bookmarks in database
const removeBookmark = dispatch => async (bookmarked) => {
    console.log(bookmarked)
    await hourApi.post('/removebookmark', { bookmarked } );
    console.log("Successfully removed bookmark");
    const response = await hourApi.get('/bookmarks');
    dispatch({ type: 'get_bookmarks', payload: response.data })
};

export const { Context, Provider } = createDataContext(
    bookmarkReducer,
    { getBookmarks, setBookmark, submitBookmark, removeBookmark },
    { bookmarkID: null, bookmarks: [] }
);