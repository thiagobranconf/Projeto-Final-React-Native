import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { createJogo } from "../../services/jogosService";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";

export const AdicionarJogoScreen = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [imagemurl, setImagemUrl] = useState("");

  const salvar = async () => {
    const novoJogo = {
      nome,
      descricao,
      preco,
      categoria,
      imagemurl,
    };

    try {
      await createJogo(novoJogo);
      navigation.goBack();
    } catch (err) {
      console.log("Erro ao adicionar jogo.", err);
    }
  };

  const cancelar = () => {
    navigation.goBack();
  };

  return (
    <NavbarWrapper>
      <View style={styles.container}>
        <Text>Adicionar Novo Jogo</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descrição"
        />
        <TextInput
          style={styles.input}
          value={preco.toString()}
          onChangeText={(text) => {
            const parsedPreco = parseFloat(text);
            if (!isNaN(parsedPreco)) {
              setPreco(parsedPreco);
            }
          }}
          placeholder="Preço"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={categoria}
          onChangeText={setCategoria}
          placeholder="Categoria"
        />
        <TextInput
          style={styles.input}
          value={imagemurl}
          onChangeText={setImagemUrl}
          placeholder="URL da Imagem"
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
    </NavbarWrapper>
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
