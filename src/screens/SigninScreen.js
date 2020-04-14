import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    return (
        <View style={styles.container}>
            {/* <NavigationEvents onWillFocus={clearErrorMessage} /> */}
            <AuthForm
                headerText="Sign In to Use Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={({ email, password}) => signin({ email, password })} //can just call signup
            />
            <View>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>                
                    <Text>Sign in here!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 300,
    },
});

export default SigninScreen;