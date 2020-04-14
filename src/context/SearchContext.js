import createDataContext from './createDataContext';

const searchReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const newScreen = dispatch => {
    dispatch({ type: 'add_current_location', payload: location });
};

export const { Context, Provider } = createDataContext (
    searchReducer,
    { newScreen },
    { searchTerm: null }
);