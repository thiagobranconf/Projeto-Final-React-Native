import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import { createJogo } from "../../services/jogosService";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";

export const AdicionarJogoScreen = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagemurl, setImagemUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePrecoChange = (text: string) => {
    const numericText = text.replace(/[^0-9.]/g, "");
    const numericValue = parseFloat(numericText);
    if (!isNaN(numericValue) && numericValue >= 0) {
      setPreco(numericText);
    } else if (numericText === "") {
      setPreco("");
    }
  };

  const validarInputs = () => {
    if (!nome || !descricao || !preco || !categoria || !imagemurl) {
      setError("Todos os campos são obrigatórios.");
      return false;
    }
    if (parseFloat(preco) <= 0) {
      setError("O preço deve ser maior que zero.");
      return false;
    }
    setError("");
    return true;
  };

  const salvar = async () => {
    if (!validarInputs()) {
      return;
    }

    const novoJogo = {
      nome,
      descricao,
      preco: parseFloat(preco),
      categoria,
      imagemurl,
    };

    setLoading(true);
    try {
      await createJogo(novoJogo);
      Alert.alert("Sucesso", "Jogo adicionado com sucesso!");
      navigation.goBack();
    } catch (err) {
      console.log("Erro ao adicionar jogo.", err);
    } finally {
      setLoading(false);
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
            value={preco}
            onChangeText={handlePrecoChange}
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
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FF3276" />
              </View>
            ) : (
              <>
                <Pressable style={styles.botao} onPress={salvar}>
                  <Text style={styles.textoBotao}>Salvar</Text>
                </Pressable>
                <Pressable style={styles.botao} onPress={cancelar}>
                  <Text style={styles.textoBotao}>Cancelar</Text>
                </Pressable>
              </>
            )}
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  errorText: {
    color: "red",
    marginTop: 20,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
