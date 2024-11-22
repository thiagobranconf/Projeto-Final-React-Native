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
        <View style={styles.containerAlterar}>
          <Text style={styles.add}>Adicionar jogo</Text>
        </View>
        <View style={styles.containerInput}>
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
      </View>
    </NavbarWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  containerInput: {
    marginTop: "5%",
  },
  containerAlterar: {
    backgroundColor: "#000000",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  add: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
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
