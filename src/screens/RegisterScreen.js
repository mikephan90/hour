import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import RegistrationForm from '../components/RegistrationForm';
import { Context as AuthContext } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
	const { state, register, clearErrorMessage } = useContext(AuthContext);

	// Clear error messages with listener on screen focus
	useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            clearErrorMessage();
        })
        return unsubscribe
    }, [navigation]);


	return (
		<View style={styles.container}>
			<RegistrationForm
				headerText="Sign Up for Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={({ username, email, password }) => register({ username, email, password })} //can just call signup
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 300
	}
});

export default RegisterScreen;
