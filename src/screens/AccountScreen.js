import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { navigate } from '../navigationRef';

const AccountScreen = () => {
	const { state: { status, userInfo }, signout } = useContext(AuthContext);

	// let username = JSON.stringify(userInfo.username).replace(/\"/g, "");
	// let email = JSON.stringify(userInfo.email).replace(/\"/g, "");

	return (
		<SafeAreaView forceInset= {{ top: 'always' }}>
			{/* <Text style={{ fontSize: 48 }}>{username}</Text>
			<Text>{email}</Text> */}
			<Spacer>
				{ status 
					? (<Button title="Sign Out" onPress={signout} />) 
					: (<Button title="Sign In" onPress={() => navigate('Signin')} />)
				}
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
