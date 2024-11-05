import { View, Text } from "react-native"
import Screen from "./components/Screen"

import {AccountScreen, Listings, Messages, Login} from './screens/index.js'
const App = () => {

  return (
    <Screen>
      <View>
        {/* <AccountScreen /> */}
        {/* <Listings /> */}
        {/* <Messages /> */}
        <Login />
      </View>
    </Screen>
  )
}

export default App