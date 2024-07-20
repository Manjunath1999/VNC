import { StyleSheet,SafeAreaView,Platform} from "react-native";
import Login from "./Login";
import Home from "./Home";
import Box from "./components/Box";
import Mapping from "./Mapping";
import Requirements from "./Requirements"
import Asrequirements from "./Asrequirements"
import Cropinfo from "./Cropinfo"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Mapping" component={Mapping} />
        <Stack.Screen name="Requirements" component={Requirements} />
        <Stack.Screen name="Asrequirements" component={Asrequirements} />
        <Stack.Screen name="Cropinfo" component={Cropinfo} />
        <Stack.Screen name="Box" component={Box} />
      </Stack.Navigator>
    </NavigationContainer>

);
}  
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop: Platform.OS ==='android'? 25 : 0,
  },
});
  