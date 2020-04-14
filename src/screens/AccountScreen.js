import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = ({ navigation }) => {
	const { state: { status }, tryLocalSignin, signout } = useContext(AuthContext);
	//console.log("Status: " + status);

	return (
		<SafeAreaView forceInset= {{ top: 'always' }}>
			<Text style={{ fontSize: 48 }}>AccountScreen</Text>
			<Spacer>
				{ status 
					? (<Button title="Sign Out" onPress={() => signout(navigation)} />) 
					: (<Button title="Sign In" onPress={() => navigation.navigate('Signin')} />)
				}
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
