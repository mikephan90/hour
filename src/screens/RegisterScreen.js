import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
	const { state, register, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			{/* New Auth Form for registration with Username */}
			<AuthForm
				headerText="Sign Up for Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={({ email, password }) => register({ email, password })} //can just call signup
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
