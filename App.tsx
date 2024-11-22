import "react-native-gesture-handler";
import { useEffect } from "react";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { Rotas } from "./src/navigation";

SplashScreen.preventAutoHideAsync();

const App = () => {
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
