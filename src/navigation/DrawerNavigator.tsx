import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../screens/LoginScreen";
import { RegistroScreen } from "../screens/RegistroScreen";
import { JogosScreen } from "../screens/JogosScreen";
import { EditarJogoScreen } from "../screens/EditarJogoScreen";
import { DrawerParamList } from "../types/screensType";
import { AdicionarJogoScreen } from "../screens/AdicionarJogoScreen";
import { AdicionarUserScreen } from "../screens/AdicionarUserScreen";
import { EditarUserScreen } from "../screens/EditarUserScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { UserScreen } from "../screens/UsersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent/DrawerContent";
import { NavbarWrapper } from "../components/NavbarWrapper/NavbarWrapper";
import DetalhesJogoScreen from "../screens/DetalhesJogoScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        drawerType: "slide",
        drawerStyle: {
          width: 300,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Jogos"
        component={JogosScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="EditarJogo"
        component={EditarJogoScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AdicionarJogo"
        component={AdicionarJogoScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Users"
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="EditarUser"
        component={EditarUserScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AdicionarUser"
        component={AdicionarUserScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="DetalhesJogo"
        component={DetalhesJogoScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
