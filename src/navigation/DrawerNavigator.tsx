import { JogosScreen } from "../screens/JogosScreen";
import { AdicionarUserScreen } from "../screens/AdicionarUserScreen";
import { EditarUserScreen } from "../screens/EditarUserScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { UserScreen } from "../screens/UsersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent/DrawerContent";
import JogosNavigator from "./JogosNavigator";
import UsersNavigator from "./UsersNavigator";
import { NossaEquipe } from "../screens/NossaEquipeScreen/Index";

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
        component={JogosNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Users"
        component={UsersNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="NossaEquipe"
        component={NossaEquipe}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
