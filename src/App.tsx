import { Suspense } from "react"
import { View, Text } from "react-native"
import Screen from "./components/Screen"
import {AccountScreen, Listings, Messages, Login, CreateListing} from './screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Suspense fallback={<Text>Loading..</Text>}>
      <Stack.Navigator>
        {/* <AccountScreen /> */}
        {/* <Listings /> */}
        {/* <Login /> */}
        {/* <Messages /> */}
        {/* <CreateListing /> */}

        <Stack.Screen name="Account Screen" component={AccountScreen} />
        <Stack.Screen name="Create Listing" component={CreateListing} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Listings" component={Listings} />

      </Stack.Navigator>
    </Suspense>
  )
}

export default App
