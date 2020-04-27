import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context } from '../context/AuthContext';
import { navigate } from '../navigationRef';

const SigninScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    // Clear error messages with listener on screen
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            clearErrorMessage();
        })
        return unsubscribe
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Use Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={({ username, password}) => signin({ username, password })} //can just call signup
            />
            <View>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigate('Register')}>                
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