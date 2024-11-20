import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegistroScreen } from "../screens/RegistroScreen";
import { JogosScreen } from "../screens/JogosScreen";
import { EditarJogoScreen } from "../screens/EditarJogoScreen";
import { RootStackParamList } from "../types/screensType";
import { AdicionarJogoScreen } from "../screens/AdicionarJogoScreen";
import { AdicionarUserScreen } from "../screens/AdicionarUserScreen";
import { EditarUserScreen } from "../screens/EditarUserScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { UserScreen } from "../screens/UsersScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Jogos"
          component={JogosScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="EditarJogo"
          component={EditarJogoScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="AdicionarJogo"
          component={AdicionarJogoScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="AdicionarUser"
          component={AdicionarUserScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Users"
          component={UserScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="EditarUser"
          component={EditarUserScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Registro"
          component={RegistroScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
