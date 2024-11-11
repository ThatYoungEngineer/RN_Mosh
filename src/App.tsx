import { useState, useEffect } from "react"

import {AccountScreen, Listing, Messages, CreateListing, Home} from './screens'
import Register from './screens/auth/Register'
import Login from './screens/auth/Login'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from "react-native-safe-area-context"

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  function AuthStack() {
	return (
	  <Stack.Navigator screenOptions={{
		headerTransparent: true,
		headerStyle: {
		  backgroundColor: 'transparent',
		},
		headerTitle: ''
		}}
		initialRouteName="Home"
	   >
		<Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Register" component={Register} />
		<Stack.Screen name="Login" component={Login} />
	  </Stack.Navigator>
	);
  }

	const MainTabNavigator = () => {
		return (
			<Tab.Navigator
				initialRouteName="Messages"
				screenOptions={{	
				headerShown: false,
					tabBarStyle: {position: 'absolute', width: '100%', backgroundColor: 'white', height: 50 + insets.bottom },
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: '#eee',
				}}
			>
				<Tab.Screen name="Messages" component={Messages} 
					options={{
						tabBarIcon: ({ size, color}) => (
							<Icon name="message-text" size={size} color={color} />
						)
					}}
				/>
				<Tab.Screen name="Listing" component={Listing}
					options={{
						tabBarIcon: ({ size, color}) => (
							<Icon name="store" size={size} color={color} />
						)
					}}
				/>
				<Tab.Screen name="Create Listing" component={CreateListing}
					options={{
						tabBarIcon: ({ size, color}) => (
							<IconMI name="add-circle" size={size} color={color} />
						)
					}}
				/>
				<Tab.Screen name="Profile" component={AccountScreen}
					options={{
						tabBarIcon: ({ size, color}) => (
							<Icon name="account" size={size} color={color} />
						)
					}}
				/>				
			</Tab.Navigator>
		)
	}

	const [isAuthenticated, setIsAuthenticated] = useState(true)

	return isAuthenticated ?
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Main" component={MainTabNavigator} />
			</Stack.Navigator>
	:	<Stack.Navigator >
			<Stack.Screen name="Auth" component={AuthStack} options={{headerShown: false}} /> 
		</Stack.Navigator>  
}

export default App
