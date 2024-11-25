import "react-native-gesture-handler";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { Rotas } from "./src/navigation";
import ConnectionStatus from "./src/components/ConnectionStatus";

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
        <ConnectionStatus />
        <Rotas />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
