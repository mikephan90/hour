import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import hourApi from '../api/hour';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'get_user_info':
			return { ...state, userInfo: action.payload };
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

// Automatically checks user credentials for existing login and automatically logs in
const tryLocalSignin = dispatch => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: { token: token, status: true } });
		navigate('MainStack');
	} else {
		//auto test purpose
		navigate('MainStack');
	}
};

// Retrieve user info from server for informational use in application
const getUserInfo = dispatch => async() => {
	try {
		const response = await hourApi.get('/user');
		dispatch({ type: 'get_user_info', payload: response.data })
	} catch (err) {
		console.log("Error retrieving info user. Not signed in.");
	}
}

const clearErrorMessage = dispatch => () => {
	dispatch({ type: 'clear_error_message' });
};

// Call register to API server to create a new account and token
const register = dispatch => async ({ username, email, password }) => {
	try {
		const response = await hourApi.post('/register', { username, email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });
		navigate('Signin');
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong with the sign up'
		});
	}
};

// Call signin to API server and log user in with token
const signin = dispatch => async ({ username, password }) => {
	try {
		const response = await hourApi.post('/signin', { username, password });
		//console.log(response)
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: { token: response.data.token, status: true }});
		navigate('MainStack');
	} catch {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong with the sign in'
		});
	}
};

// Call signout to API server and log user out
const signout = dispatch => async (navigation) => {
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'signout', payload: false});
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ tryLocalSignin, clearErrorMessage, register, signin, signout, getUserInfo },
	{ token: null, errorMessage: '', status: null, userInfo: null }
);
