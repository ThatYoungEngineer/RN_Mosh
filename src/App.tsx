import { Suspense } from "react"
import { View, Text } from "react-native"
import Screen from "./components/Screen"
import {AccountScreen, Listings, Messages, Login, CreateListing} from './screens'

const App = () => {

  return (
    <Suspense fallback={<Text>Loading..</Text>}>
      <Screen>
        {/* <AccountScreen /> */}
        {/* <Listings /> */}
        {/* <Login /> */}
        {/* <Messages /> */}
        <CreateListing />
      </Screen>
    </Suspense>
  )
}

export default App
