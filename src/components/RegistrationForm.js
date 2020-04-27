import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const RegistrationForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input 
                label="Username" 
                value={username} 
                onChangeText={setUsername}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                label="Email" 
                value={email} 
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                secureTextEntry
                label="Password" 
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false} 
            />
            <Input 
                label="Confirm Password" 
                value={passwordVerify} 
                onChangeText={setPasswordVerify}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ username, email, password })} />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 18,
        color: 'red',
        marginLeft: 15,
    },
});

export default RegistrationForm;