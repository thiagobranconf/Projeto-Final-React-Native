import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useAuth } from "../../contexts/AuthContext";
import { styles } from "./styles";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation } = props;
  const { user, logout } = useAuth();
  const routeName =
    navigation.getState().routes[navigation.getState().index].name;

  const navigateToScreen = (screen: string) => {
    if (screen === "Jogos") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Jogos" }],
      });
    } else if (screen === "Users") {
      navigation.reset({
        index: 0,
        routes: [{ name: "Users" }],
      });
    } else {
      navigation.navigate(screen);
    }
  };

  const isActive = (screen: string) => {
    return routeName === screen ? styles.activeMenuItem : null;
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/CUBO_SEM_NOME.png")}
        />
        <Text style={styles.name}>Olá, {user ? user.nome : "Visitante"}</Text>
      </View>
      <Pressable
        style={[styles.menuItem, isActive("Home")]}
        onPress={() => navigateToScreen("Home")}
      >
        <Text style={styles.menuText}>Home</Text>
      </Pressable>
      <Pressable
        style={[styles.menuItem, isActive("Jogos")]}
        onPress={() => navigateToScreen("Jogos")}
      >
        <Text style={styles.menuText}>Jogos</Text>
      </Pressable>
      <Pressable
        style={[styles.menuItem, isActive("Users")]}
        onPress={() => navigateToScreen("Users")}
      >
        <Text style={styles.menuText}>Usuários</Text>
      </Pressable>
      <Pressable
        style={[styles.menuItem, isActive("NossaEquipe")]}
        onPress={() => navigateToScreen("NossaEquipe")}
      >
        <Text style={styles.menuText}>Nossa Equipe</Text>
      </Pressable>
      <View style={styles.footer}>
        <Pressable style={styles.footerButton} onPress={() => logout()}>
          <Text style={styles.footerText}>🔓 Sair</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DrawerContent;
