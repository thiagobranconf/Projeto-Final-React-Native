import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { DrawerParamList } from "../../types/screensType";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<DrawerParamList>>();

  return (
    <ImageBackground
      source={require("../../../assets/controle.png")}
      imageStyle={styles.imgbg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.titulo}>Painel de Controle Interno</Text>
        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate("Jogos")}
        >
          <Text style={styles.textoBotao}>Jogos</Text>
        </Pressable>
        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate("Users")}
        >
          <Text style={styles.textoBotao}>Usuários</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "relative",
    height: "100%",
  },
  imgbg: {
    position: "absolute",
    top: "4%",
    width: "250%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#FF3276",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    width: "70%",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
  },
});
