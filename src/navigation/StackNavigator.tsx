import { JogosScreen } from "../screens/JogosScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegistroScreen } from "../screens/RegistroScreen";
import { RootStackParamList } from "../types/screensType";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
