import { Suspense } from "react"
import { StatusBar, Text } from "react-native"

import {AccountScreen, Listings, Messages, CreateListing} from './screens'
import Register from './screens/auth/Register'
import Login from './screens/auth/Login'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function AuthStack() {
	return (
	  <Stack.Navigator screenOptions={{
		headerTransparent: true,
		headerStyle: {
		  backgroundColor: 'transparent',
		},
		headerTitle: ''
		}}
	   >
		<Stack.Screen name="Register" component={Register} />
		<Stack.Screen name="Login" component={Login} />
	  </Stack.Navigator>
	);
  }

	function MainTabNavigator() {
		return (
			<Tab.Navigator
				initialRouteName="Messages"
				screenOptions={{	
				headerShown: false,
					tabBarStyle: { position: 'absolute', height: 60, width: '100%'},
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
				<Tab.Screen name="Listings" component={Listings}
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

  return (
	<>
	      {/* <StatusBar hidden /> */}
		<Suspense fallback={<Text>Loading..</Text>}>
		
			{/* <AccountScreen /> */}
			{/* <Listings /> */}
			{/* <Login /> */}
			{/* <Messages /> */}
			{/* <CreateListing /> */}

			{/* <Stack.Navigator initialRouteName="Account Screen">
			<Stack.Screen name="Account Screen" component={AccountScreen} />
			<Stack.Screen name="Create Listing" component={CreateListing} />
			<Stack.Screen name="Messages" component={Messages} />
			<Stack.Screen name="Listings" component={Listings}
				options={{
					headerStyle: { backgroundColor: 'tomato'},
					headerShown: true,
					headerTintColor: '#fff'
				}}
				/>
			</Stack.Navigator> */}

			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Main" component={MainTabNavigator} />
				<Stack.Screen name="Auth" component={AuthStack} 
				
				/> 
			</Stack.Navigator>
			
		</Suspense>
	</>
  )
}

export default App
