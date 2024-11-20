import { useEffect, useState } from "react";
import { jogo } from "../../types/types";
import { createJogo, getJogos, deleteJogo } from "../../services/jogosService";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { JogosScreenNavigationProp } from "../../types/screensType";

export const JogosScreen = () => {
  const [jogo, setJogo] = useState("");
  const [loading, setLoading] = useState(true);
  const [listaJogos, setListaJogos] = useState<jogo[]>([]);
  const navigation = useNavigation<JogosScreenNavigationProp>();

  const buscarJogos = async () => {
    setLoading(true);
    try {
      const nextlvlApi = await getJogos();
      setListaJogos(nextlvlApi);
    } catch (err) {
      console.log("Erro ao carregar jogos.", err);
    }
    setLoading(false);
  };

  const adicionarJogo = async () => {
    navigation.navigate("AdicionarJogo");
  };

  const deletarJogo = async (id: number) => {
    try {
      const jogoDeletadoApi = await deleteJogo(id);
      const listaFiltrada = listaJogos.filter(
        (item) => item.id !== jogoDeletadoApi.id
      );
      setListaJogos(listaFiltrada);
    } catch (err) {
      console.log("Erro ao deletar jogo.", err);
    }
  };

  const editarJogo = (itemJogo: jogo) => {
    navigation.navigate("EditarJogo", { jogo: itemJogo });
  };

  useEffect(() => {
    buscarJogos();
    const unsubscribe = navigation.addListener("focus", () => {
      buscarJogos();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Pressable style={styles.botao} onPress={adicionarJogo}>
          <Text>Adicionar novo jogo</Text>
        </Pressable>
      </View>
      {loading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={listaJogos}
          renderItem={({ item, index }) => (
            <View>
              <Image
                source={{ uri: item.imagemurl }}
                style={styles.imagem}
                resizeMode="cover"
              />
              <Text>{item.nome}</Text>
              <View>
                <Pressable
                  style={styles.botao}
                  onPress={() => editarJogo(item)}
                >
                  <Text style={styles.textoBotao}>Alterar</Text>
                </Pressable>
                <Pressable
                  style={styles.botao}
                  onPress={() => {
                    if (item.id !== undefined) {
                      deletarJogo(item.id);
                    } else {
                      console.log("ID não definido para este item.");
                    }
                  }}
                >
                  <Text style={styles.textoBotao}>Deletar</Text>
                </Pressable>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 16,
  },
  imagem: {
    width: 150,
    height: 150,
  },
  botao: {
    backgroundColor: "#FF3276",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    width: "50%",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
  },
});
