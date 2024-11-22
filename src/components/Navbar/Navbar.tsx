import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../types/screensType";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { styles } from "./styles";

export const Navbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [fontsLoaded] = useFonts({
    "Bungee-Regular": require("../../../assets/fonts/Bungee-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>NEXTLEVEL</Text>;
  }

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {route.name !== "Home" && (
        <Pressable onPress={handleBackPress} style={styles.back}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      )}

      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/CUBO_SEM_NOME.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>NextLevel</Text>
      </View>

      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.hamburger}
      >
        <Text style={styles.hamburgerText}>☰</Text>
      </Pressable>
    </View>
  );
};
