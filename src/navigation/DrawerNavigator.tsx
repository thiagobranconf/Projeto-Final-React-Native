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
        component={() => (
          <NavbarWrapper>
            <HomeScreen />
          </NavbarWrapper>
        )}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Jogos"
        component={() => (
          <NavbarWrapper>
            <JogosScreen />
          </NavbarWrapper>
        )}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="EditarJogo"
        component={() => (
          <NavbarWrapper>
            <EditarJogoScreen />
          </NavbarWrapper>
        )}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AdicionarJogo"
        component={() => (
          <NavbarWrapper>
            <AdicionarJogoScreen />
          </NavbarWrapper>
        )}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Users"
        component={() => (
          <NavbarWrapper>
            <UserScreen />
          </NavbarWrapper>
        )}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="EditarUser"
        component={() => (
          <NavbarWrapper>
            <EditarUserScreen />
          </NavbarWrapper>
        )}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AdicionarUser"
        component={() => (
          <NavbarWrapper>
            <AdicionarUserScreen />
          </NavbarWrapper>
        )}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen
          name="Login"
          component={() => (
            <NavbarWrapper>
              <LoginScreen />
            </NavbarWrapper>
          )}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Registro"
          component={() => (
            <NavbarWrapper>
              <RegistroScreen />
            </NavbarWrapper>
          )}
          options={{ headerShown: false }}
        /> */}
      <Drawer.Screen
        name="DetalhesJogo"
        component={() => (
          <NavbarWrapper>
            <DetalhesJogoScreen />
          </NavbarWrapper>
        )}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
