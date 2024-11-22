import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { Rotas } from "./src/navigation";

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
