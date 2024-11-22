import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  DrawerActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { styles } from "./styles";

export const Navbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [fontsLoaded] = useFonts({
    "Bungee-Regular": require("../../../assets/fonts/Bungee-Regular.ttf"),
  });
  const route = useRoute();

  if (!fontsLoaded) {
    return <Text>NEXTLEVEL</Text>;
  }

  const isHomeScreen = route.name === "Home";

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {!isHomeScreen && (
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
