import { View, Text } from "react-native"
import Screen from "./components/Screen"
import AccountScreen from "./screens/AccountScreen"
import Listings from "./screens/Listings"
import Messages from "./screens/Messages"

const App = () => {

  return (
    <Screen>
      <View>
        <AccountScreen />
        {/* <Listings /> */}
        {/* <Messages /> */}
      </View>
    </Screen>
  )
}

export default App