import { useNavigation, useRoute } from "@react-navigation/native";
import { EditarUserRouteProp } from "../../types/screensType";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { updateUser } from "../../services/userService";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";
import { styles } from "./styles";

export const EditarUserScreen = () => {
  const route = useRoute<EditarUserRouteProp>();
  const userAtual = route.params.user;
  const navigation = useNavigation();

  const [nome, setNome] = useState(userAtual.nome);
  const [email, setEmail] = useState(userAtual.email);
  const [senha, setSenha] = useState(userAtual.senha);

  const salvar = async () => {
    const userEditado = {
      id: userAtual.id,
      nome,
      email,
      senha,
    };

    try {
      await updateUser(userEditado);
      navigation.goBack();
    } catch (err) {
      console.log("Erro ao salvar usuário.", err);
    }
  };

  const cancelar = () => {
    navigation.goBack();
  };

  return (
    <NavbarWrapper>
      <View style={styles.container}>
        <View style={styles.containerAlterar}>
          <Text style={styles.add}>Editar usuário</Text>
        </View>
        <View style={styles.containerInput}>
          <Text>ID: {userAtual.id}</Text>
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
      </View>
    </NavbarWrapper>
  );
};
