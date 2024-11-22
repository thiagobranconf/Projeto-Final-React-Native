import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useAuth } from "../../contexts/AuthContext";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation } = props;

  const { user, logout } = useAuth();

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen);
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
        style={styles.menuItem}
        onPress={() => navigateToScreen("Home")}
      >
        <Text style={styles.menuText}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.menuItem}
        onPress={() => navigateToScreen("Jogos")}
      >
        <Text style={styles.menuText}>Jogos</Text>
      </Pressable>
      <Pressable
        style={styles.menuItem}
        onPress={() => navigateToScreen("Users")}
      >
        <Text style={styles.menuText}>Usuários</Text>
      </Pressable>
      <View style={styles.footer}>
        <Pressable style={styles.footerButton} onPress={() => logout()}>
          <Text style={styles.footerText}>🔓 Sair</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#EECCD7",
  },
  header: {
    paddingTop: 40,
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: "#FF3276",
  },
  menuItem: {
    backgroundColor: "#F3ADC4",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
  },
  menuText: {
    fontSize: 16,
    color: "#FF3276",
  },
  footer: {
    marginTop: "auto",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#EDEDED",
  },
  footerButton: {
    paddingVertical: 10,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#FF0000",
  },
});

export default DrawerContent;
