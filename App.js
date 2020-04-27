import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './src/navigationRef';

// Screens
import MapScreen from './src/screens/MapScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import AccountScreen from './src/screens/AccountScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import BusinessDetailScreen from './src/screens/BusinessDetailScreen';
import SigninScreen from './src/screens/SigninScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import testScreen from './src/screens/testScreen';

import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as BookmarkProvider } from './src/context/BookmarkContext';
import { Ionicons, Feather } from '@expo/vector-icons';


import { Button, TouchableOpacity, Text } from 'react-native';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function SearchStack({ navigation, route }){
	if(route.name === "Search") {
		navigation.setOptions({tabBarVisible: false})
	}
	return (
		<Stack.Navigator>
			<Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false}} />	
		</Stack.Navigator>
	)
};

function MapStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="MapScreen" 
				component={MapScreen} 
				options={{ 
					headerShown: true,
					headerTitle: 'Whats Nearby!',
					headerTitleStyle: {
						color: 'white',
						fontSize: 25,
						fontWeight: 'bold',
					},
					headerRight: () => (
						<TouchableOpacity>
							<Feather 
								style={{ marginRight: 10 }}
								name="filter" 
								size={20} 
								color="white" 
							/>
						</TouchableOpacity>
						),
					headerStyle: {
						backgroundColor: "#1d1d1d",
					},

				}} 
			/>	
		</Stack.Navigator>
	)
}

function BusinessStack({ navigation }){
	return (
		<Stack.Navigator>	
			<Stack.Screen name="BusinessDetail" component={BusinessDetailScreen}
				options={{
					headerLeft: () => (<Button title="Back" onPress={() => navigation.goBack() }/>),
					title: '',
					headerShown: true,
					headerStyle: {
						backgroundColor: 'black'
					}}
				}
			/>
		</Stack.Navigator>
	)
};

function AuthStack ({ navigation }){
	return (
		<Stack.Navigator>
			<Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Signin" component={SigninScreen} 
				options={{
					headerLeft: () => (<Button title="Back" onPress={() => navigation.navigate('MainStack') }/>),
					title: '',
					headerShown: true,
					headerStyle: {
						backgroundColor: '#a78ce4'
					}}
				}
			/>
			<Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true }} />
		</Stack.Navigator>
	)
};

const MainTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Home') {
						iconName = focused ? 'ios-home' : 'ios-home';
					} else if (route.name === 'Search') {
						iconName = focused ? 'ios-search' : 'ios-search';
					} else if (route.name === 'Map') {
						iconName = focused ? 'ios-map' : 'ios-map';
					} else if (route.name === 'Account') {
						iconName = focused ? 'ios-list-box' : 'ios-list';
					} else if (route.name === 'Bookmarks') {
						iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
					}

					return <Ionicons name={iconName} size={20} color={color} />;
				},
				
			})}
			tabBarOptions={{
				style: {
					backgroundColor: '#1d1d1d',
				},
				activeTintColor: 'white',
				inactiveTintColor: 'gray',
			}}

		>
			<Tab.Screen name="Search" component={SearchStack} />
			<Tab.Screen name="Map" component={MapStack} />
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Bookmarks" component={BookmarkScreen} />
			<Tab.Screen name="Account" component={AccountScreen} />
		</Tab.Navigator>
	);
}


function MainStack(){
	return (
		<Stack.Navigator>
			{/* <Stack.Screen name="Test" component={testScreen} options={{ headerShown: false}}/> */}
			<Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false}}/>
			<Stack.Screen name="Business" component={BusinessStack} options={{ headerShown: false}}/>
		</Stack.Navigator>
	)
}

function AppStack(){
	return (
		<Stack.Navigator>
			<Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false}} />
			<Stack.Screen name="MainStack" component={MainStack} options={{ headerShown: false}} />
		</Stack.Navigator>
	)
};


export default function App() {
	return (
		<LocationProvider>
			<AuthProvider>
				<BookmarkProvider>
					<NavigationContainer ref={navigationRef}>
						<AppStack />
					</NavigationContainer>
				</BookmarkProvider>
			</AuthProvider>
		</LocationProvider>
	);
}
