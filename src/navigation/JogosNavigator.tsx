import { AdicionarJogoScreen } from "../screens/AdicionarJogoScreen";
import DetalhesJogoScreen from "../screens/DetalhesJogoScreen";
import { EditarJogoScreen } from "../screens/EditarJogoScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JogosScreen } from "../screens/JogosScreen";

const Stack = createNativeStackNavigator();
const JogosNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="JogosPrincipal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="JogosPrincipal" component={JogosScreen} />
      <Stack.Screen name="EditarJogo" component={EditarJogoScreen} />
      <Stack.Screen name="AdicionarJogo" component={AdicionarJogoScreen} />
      <Stack.Screen name="DetalhesJogo" component={DetalhesJogoScreen} />
    </Stack.Navigator>
  );
};

export default JogosNavigator;
