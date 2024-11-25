import { useNavigation, useRoute } from "@react-navigation/native";
import { EditarJogoRouteProp } from "../../types/screensType";
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
import { updateJogo } from "../../services/jogosService";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";
import { styles } from "./styles";

export const EditarJogoScreen = () => {
  const route = useRoute<EditarJogoRouteProp>();
  const jogoAtual = route.params.jogo;
  const navigation = useNavigation();

  const [nome, setNome] = useState(jogoAtual.nome);
  const [descricao, setDescricao] = useState(jogoAtual.descricao);
  const [preco, setPreco] = useState(jogoAtual.preco.toString());
  const [categoria, setCategoria] = useState(jogoAtual.categoria);
  const [imagemurl, setImagemUrl] = useState(jogoAtual.imagemurl);
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

    const jogoEditado = {
      id: jogoAtual.id,
      nome,
      descricao,
      preco: parseFloat(preco),
      categoria,
      imagemurl,
    };

    setLoading(true);
    try {
      await updateJogo(jogoEditado);
      Alert.alert("Sucesso", "Jogo alterado com sucesso!");
      navigation.goBack();
    } catch (err) {
      console.log("Erro ao salvar jogo.", err);
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
          <Text style={styles.alterar}>Alterar Jogo</Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.id}>ID: {jogoAtual.id}</Text>
          <View>
            <Text style={styles.id}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
            />
          </View>
          <View>
            <Text style={styles.id}>Descrição:</Text>
            <TextInput
              style={styles.input}
              value={descricao}
              onChangeText={setDescricao}
              placeholder="Descrição"
              multiline={true}
              numberOfLines={6}
            />
          </View>
          <View>
            <Text style={styles.id}>Preço:</Text>
            <TextInput
              style={styles.input}
              value={preco}
              onChangeText={setPreco}
              placeholder="Preço"
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text style={styles.id}>Categoria:</Text>
            <TextInput
              style={styles.input}
              value={categoria}
              onChangeText={setCategoria}
              placeholder="Categoria"
            />
          </View>
          <View>
            <Text style={styles.id}>Imagem:</Text>
            <TextInput
              style={styles.input}
              value={imagemurl}
              onChangeText={setImagemUrl}
              placeholder="URL da Imagem"
              multiline={true}
              numberOfLines={3}
            />
          </View>
          <View style={styles.botaoContainer}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FF3276" />
              </View>
            ) : (
              <>
                <Pressable style={styles.botao} onPress={cancelar}>
                  <Text style={styles.textoBotao}>Cancelar</Text>
                </Pressable>
                <Pressable style={styles.botao} onPress={salvar}>
                  <Text style={styles.textoBotao}>Salvar</Text>
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
