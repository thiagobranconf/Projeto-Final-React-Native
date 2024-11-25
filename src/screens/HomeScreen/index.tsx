import React, { useLayoutEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { DrawerParamList } from "../../types/screensType";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";
import { styles } from "./styles";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<DrawerParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }),
    [navigation];

  return (
    <NavbarWrapper>
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
          <Pressable
            style={styles.botao}
            onPress={() => navigation.navigate("NossaEquipe")}
          >
            <Text style={styles.textoBotao}>Nossa Equipe</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </NavbarWrapper>
  );
};
