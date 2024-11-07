import { Suspense } from "react"
import { View, Text } from "react-native"
import Screen from "./components/Screen"
import {AccountScreen, Listings, Messages, Login, CreateListing} from './screens'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <Suspense fallback={<Text>Loading..</Text>}>
      <NavigationContainer>
      <Screen>
        {/* <AccountScreen /> */}
        {/* <Listings /> */}
        {/* <Login /> */}
        {/* <Messages /> */}
        <CreateListing />
      </Screen>
      </NavigationContainer>
    </Suspense>
  )
}

export default App
