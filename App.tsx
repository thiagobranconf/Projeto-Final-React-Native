import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FD0054" />
      </View>
    );
  }
  return user ? <DrawerNavigator /> : <StackNavigator />;
};

export default () => (
  <AuthProvider>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </AuthProvider>
);
