import { View, Text } from "react-native"
import Screen from "./components/Screen"
import AccountScreen from "./screens/AccountScreen"
import Listings from "./screens/Listings"

const App = () => {

  return (
    <Screen>
      <View>
        <AccountScreen />
        {/* <Listings /> */}
      </View>
    </Screen>
  )
}

export default App