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
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";

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

  const verDetalhes = (itemJogo: jogo) => {
    navigation.navigate("DetalhesJogo", { jogo: itemJogo });
  };

  useEffect(() => {
    buscarJogos();
    const unsubscribe = navigation.addListener("focus", () => {
      buscarJogos();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <NavbarWrapper>
      <View style={styles.container}>
        <View>
          <Pressable style={styles.botaoAdd} onPress={adicionarJogo}>
            <Text style={styles.textAdd}>Adicionar novo jogo</Text>
          </Pressable>
        </View>
        {loading ? (
          <View>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            data={listaJogos}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.imagemurl }}
                  style={styles.imagem}
                  resizeMode="cover"
                />
                <View style={styles.conteudoCard}>
                  <Text style={styles.nomeJogo}>{item.nome}</Text>
                  <View style={styles.botoesContainer}>
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
                    <Pressable
                      style={styles.botao}
                      onPress={() => verDetalhes(item)}
                    >
                      <Text style={styles.textoBotao}>Ver detalhes</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
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
  botaoAdd: {
    backgroundColor: "#FF3276",
    alignSelf: "center",
    padding: 10,
    borderRadius: 8,
    width: "70%",
    marginBottom: 15,
  },
  textAdd: {
    textAlign: "center",
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#EECCD7",
    borderRadius: 24,
    padding: 16,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  imagem: {
    width: 190,
    height: 190,
    borderRadius: 8,
    marginRight: 12,
    paddingTop: 8,
  },
  conteudoCard: {
    flex: 1,
    justifyContent: "space-between",
  },
  nomeJogo: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 8,
    paddingLeft: 10,
    color: "#333",
  },
  botoesContainer: {
    paddingLeft: 8,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  botao: {
    backgroundColor: "#FF3276",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    width: "98%",
    marginBottom: 4,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
