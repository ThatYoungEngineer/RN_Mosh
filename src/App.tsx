import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";

import {AccountScreen, Listing, Messages, CreateListing, Home, ListingDetails} from './screens'
import Register from './screens/auth/Register'
import Login from './screens/auth/Login'

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native';
import SystemNavigationBar from "react-native-system-navigation-bar";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();


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

	function MainTabNavigator() {
		return (
			<Tab.Navigator
				initialRouteName="Listing"
				screenOptions={{	
				headerShown: false,
					tabBarStyle: {position: 'absolute', width: '100%', backgroundColor: 'white', height: 50 + insets.bottom },
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: '#eee',
				}}
			>
				<Tab.Screen name="Listing" component={Listing}
					options={{
						tabBarIcon: ({ size, color}) => (
							<Icon name="store" size={size} color={color} />
						)
					}}
				/>
				<Tab.Screen name="CreateListing" component={CreateListing}
					options={{
						tabBarButton: () => (
							<TouchableOpacity 
								style={{bottom: 20, width: 60, height: 60, backgroundColor: '#ff4135', alignItems: 'center', justifyContent: 'center', borderRadius: 50, borderWidth: 5, borderColor: '#eee', alignContent: 'center', alignSelf: 'center'}}
								onPress={() => navigation.navigate("CreateListing")}
							>
								<IconMI name="add-circle" size={30} color={'white'} />
							</TouchableOpacity>
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
				<Stack.Screen name="Messages" component={Messages} />
				<Stack.Screen name="ListingDetails" component={ListingDetails} />
			</Stack.Navigator>
	:	<Stack.Navigator >
			<Stack.Screen name="Auth" component={AuthStack} options={{headerShown: false}} /> 
		</Stack.Navigator>  
}

export default App
