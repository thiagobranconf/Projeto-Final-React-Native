import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import DrawerNavigator from "./DrawerNavigator";
import StackNavigator from "./StackNavigator";

export const Rotas = () => {
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
