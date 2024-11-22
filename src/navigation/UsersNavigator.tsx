import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditarUserScreen } from "../screens/EditarUserScreen";
import { AdicionarUserScreen } from "../screens/AdicionarUserScreen";
import { UserScreen } from "../screens/UsersScreen";

const Stack = createNativeStackNavigator();
const UsersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Users" component={UserScreen} />
      <Stack.Screen name="EditarUser" component={EditarUserScreen} />
      <Stack.Screen name="AdicionarUser" component={AdicionarUserScreen} />
    </Stack.Navigator>
  );
};

export default UsersNavigator;
