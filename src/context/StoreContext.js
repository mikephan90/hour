import createDataContext from './createDataContext';
import hourApi from '../api/hour';

const storeReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const { Context, Provider } = createDataContext(
    storeReducer,
    {},
    {blogInfo: [] }
);