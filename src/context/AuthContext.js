import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import hourApi from '../api/hour';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signin':
			return { errorMessage: '', token: action.payload.token, status: action.payload.status };
		case 'signout':
			return { token: null, errorMessage: '', status: action.payload };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		default:
			return state;
	}
};

const tryLocalSignin = dispatch => async (navigation) => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: { token: token, status: true } });
		navigation.navigate('Search');
	} else {
		//auto test purpose
		navigation.navigate('MainStack');
	}
};

const clearErrorMessage = dispatch => () => {
	dispatch({ type: 'clear_error_message' });
};

const register = dispatch => async ({ email, password }) => {
	// make api request to sign up with that email and password
	//if we sign up, modify our state and say that we are authenticated
	//if sign up fails we need to reflect error message
	try {
		const response = await hourApi.post('/register', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
		//navigation.navigate('Home');
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong with the sign up'
		});
	}
};

const signin = dispatch => async ({ email, password }) => {
	// try to sign in
	//handle success by updatingn state
	// handle failure by displaying error
	try {
		const response = await hourApi.post('/signin', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		console.log(response)
		dispatch({ type: 'signin', payload: { token: response.data.token, status: true }});
		//navigation.navigate('Search');
	} catch {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong with the sign in'
		});
	}
};

const signout = dispatch => async (navigation) => {
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'signout', payload: false});
	//navigation.navigate('Home');
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ tryLocalSignin, clearErrorMessage, register, signin, signout },
	{ token: null, errorMessage: '', status: null }
);
