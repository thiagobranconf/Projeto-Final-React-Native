import { useEffect, useState } from "react";
import { jogo } from "../../types/types";
import {
  getJogos,
  deleteJogo,
  getCategorias,
} from "../../services/jogosService";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { JogosScreenNavigationProp } from "../../types/screensType";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

export const JogosScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listaJogos, setListaJogos] = useState<jogo[]>([]);
  const [todasCategorias, setTodasCategorias] = useState<string[]>([]);
  const [filtroCategoria, setFiltroCategoria] = useState<string[]>([]);
  const [filtroPrecoMin, setFiltroPrecoMin] = useState<number | null>(null);
  const [filtroPrecoMax, setFiltroPrecoMax] = useState<number | null>(null);

  const navigation = useNavigation<JogosScreenNavigationProp>();

  const buscarJogos = async () => {
    setLoading(true);
    try {
      const nextlvlApi = await getJogos();
      const jogosFiltrados = nextlvlApi.filter((jogo) => {
        const precoMinOk =
          filtroPrecoMin === null || jogo.preco >= filtroPrecoMin;
        const precoMaxOk =
          filtroPrecoMax === null || jogo.preco <= filtroPrecoMax;

        const categoriaOk =
          filtroCategoria.length === 0 ||
          filtroCategoria.includes(jogo.categoria);
        return precoMinOk && precoMaxOk && categoriaOk;
      });
      setListaJogos(jogosFiltrados);
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

  const buscarCategorias = async () => {
    try {
      const categorias = await getCategorias();
      setTodasCategorias(categorias);
    } catch (err) {
      console.log("Erro ao buscar categorias.", err);
    }
  };

  const alternarCategoria = (categoria: string) => {
    setFiltroCategoria((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

  useEffect(() => {
    buscarJogos();
    buscarCategorias();
    const unsubscribe = navigation.addListener("focus", () => {
      buscarJogos();
      buscarCategorias();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <NavbarWrapper>
      <View style={styles.container}>
        <View style={styles.filtros}>
          <Text style={styles.textFiltros}>Filtros</Text>
          <ScrollView horizontal style={styles.filtroContainer}>
            {todasCategorias.map((categoria) => (
              <View key={categoria} style={styles.checkboxContainer}>
                <Switch
                  value={filtroCategoria.includes(categoria)}
                  onValueChange={() => alternarCategoria(categoria)}
                />
                <Text style={styles.checkboxLabel}>{categoria}</Text>
              </View>
            ))}
          </ScrollView>
          <TextInput
            style={styles.input}
            placeholder="Preço mínimo"
            keyboardType="numeric"
            value={filtroPrecoMin ? filtroPrecoMin.toString() : ""}
            onChangeText={(text) =>
              setFiltroPrecoMin(text ? parseFloat(text) : null)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Preço máximo"
            keyboardType="numeric"
            value={filtroPrecoMax ? filtroPrecoMax.toString() : ""}
            onChangeText={(text) =>
              setFiltroPrecoMax(text ? parseFloat(text) : null)
            }
          />
          <Pressable style={styles.botao} onPress={buscarJogos}>
            <Text style={styles.textoBotao}>Aplicar Filtros</Text>
          </Pressable>
        </View>
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
                  <Text style={styles.precoJogo}>
                    R$ {item.preco.toFixed(2)}
                  </Text>
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
