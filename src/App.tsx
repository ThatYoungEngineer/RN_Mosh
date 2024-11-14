import { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native";

import {AccountScreen, Listing, Messages, CreateListing, Home, ListingDetails} from './screens'
import Register from './screens/auth/Register'
import Login from './screens/auth/Login'

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";

import AsyncStorage from '@react-native-async-storage/async-storage';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from "./context/auth";


const App = () => {
	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();
	const insets = useSafeAreaInsets();
	const navigation = useNavigation();

  //  NetInfo.fetch().then((net)=>console.log("network: ", net));
  
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

  function ListingStack() {
	return (
	  <Stack.Navigator screenOptions={{
		headerTransparent: true,
		headerStyle: {
		  backgroundColor: 'transparent',
		},
		headerTitle: ''
		}}
		initialRouteName="Listing"
	   >
		<Stack.Screen name="Listing" component={Listing} />
		<Stack.Screen 
			name="ListingDetails" component={ListingDetails} 
			options={({ route }) => ({
				presentation: 'modal',
				animation: 'slide_from_right',
				headerTitle: route?.params?.item?.title || 'Details',
				headerStyle: {
					backgroundColor: 'white'
				},
				headerTintColor: '#ff4135'
			})} 
		/>
	  </Stack.Navigator>
	);
  }

  function AccountStack() {
	return (
	  <Stack.Navigator screenOptions={{
		headerTransparent: true,
		headerStyle: {
		  backgroundColor: 'transparent',
		},
		headerTitle: ''
		}}
		initialRouteName="AccountScreen"
	   >
		<Stack.Screen name="AccountScreen" component={AccountScreen} />
		<Stack.Screen name="Messages" component={Messages} 
		options={{
			headerStyle: {
			  backgroundColor: 'white' 
			},
		  }} 
		/>
	  </Stack.Navigator>
	);
  }

  function MainTabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName="Feed"
			screenOptions={{	
			headerShown: false,
				tabBarStyle: {position: 'absolute', width: '100%', backgroundColor: 'white', height: 50 + insets.bottom },
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: '#eee',
			}}
		>
			<Tab.Screen name="Feed" component={ListingStack}
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
			<Tab.Screen name="Profile" component={AccountStack}
				options={{
					tabBarIcon: ({ size, color}) => (
						<Icon name="account" size={size} color={color} />
					)
				}}
			/>				
		</Tab.Navigator>
	)
  }

	const [internetConnected, setInternetConnected] = useState(true);
  	const { user } = useAuth()

	return user ?
			<Stack.Navigator screenOptions={{ headerShown: false }} >
				<Stack.Screen name="Main" component={MainTabNavigator} />
			</Stack.Navigator>
	:	<Stack.Navigator >
			<Stack.Screen name="Auth" component={AuthStack} options={{headerShown: false}} /> 
		</Stack.Navigator>  
}

export default App
