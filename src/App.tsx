import { Suspense } from "react"
import { View, Text, Dimensions } from "react-native"

import {AccountScreen, Listings, Messages, Login, CreateListing} from './screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import { BlurView } from "@react-native-community/blur";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const {width} = Dimensions.get('window')

  return (
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

		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { position: 'absolute', height: 60, maxHeight: 60},
				tabBarBackground: () => (
					<BlurView
					style={{position: 'absolute', right: 0, bottom: 0, top: 0, left: 0}}
					blurType="dark"
					blurAmount={100}
					reducedTransparencyFallbackColor="white"
					/>
				),
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
    </Suspense>
  )
}

export default App
