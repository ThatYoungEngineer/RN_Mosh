import { View, Text } from "react-native"
import Screen from "./components/Screen"
import AccountScreen from "./screens/AccountScreen"
import Listings from "./screens/Listings"
import Messages from "./screens/Messages"
import Login from "./screens/Login"

const App = () => {

  return (
    <Screen>
      <View>
        {/* <AccountScreen /> */}
        {/* <Listings /> */}
        <Messages />
        {/* <Login /> */}
      </View>
    </Screen>
  )
}

export default App