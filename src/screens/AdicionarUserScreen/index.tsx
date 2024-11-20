import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { createUser } from "../../services/userService";

export const AdicionarUserScreen = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const salvar = async () => {
    const novoUser = {
      nome,
      email,
      senha,
    };

    try {
      await createUser(novoUser);
      navigation.goBack();
    } catch (err) {
      console.log("Erro ao adicionar usuário.", err);
    }
  };

  const cancelar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Adicionar Novo Usuário</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
      />
      <View style={styles.botaoContainer}>
        <Pressable style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={cancelar}>
          <Text style={styles.textoBotao}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 16,
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
    padding: 10,
    borderRadius: 8,
    width: "45%",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
  },
});
