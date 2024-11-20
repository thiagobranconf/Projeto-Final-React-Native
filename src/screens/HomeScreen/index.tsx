import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../types/screensType";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>HOME TEMPORÁRIA</Text>
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
        onPress={() => navigation.navigate("Registro")}
      >
        <Text style={styles.textoBotao}>Cadastro</Text>
      </Pressable>
      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textoBotao}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botaoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#FF3276",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    width: "45%",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 24,
  },
});
