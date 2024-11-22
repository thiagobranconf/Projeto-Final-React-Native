import { useEffect, useState } from "react";
import { user } from "../../types/types";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UsersScreenNavigationProp } from "../../types/screensType";
import { deleteUser, getUsers } from "../../services/userService";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";
import { styles } from "./styles";

export const UserScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listaUsers, setListaUsers] = useState<user[]>([]);
  const navigation = useNavigation<UsersScreenNavigationProp>();

  const buscarUsers = async () => {
    setLoading(true);
    try {
      const nextlvlApi = await getUsers();
      setListaUsers(nextlvlApi);
    } catch (err) {
      console.log("Erro ao carregar usuários.", err);
    }
    setLoading(false);
  };

  const adicionarUser = async () => {
    navigation.navigate("AdicionarUser");
  };

  const deletarUser = async (id: number) => {
    try {
      const userDeletadoApi = await deleteUser(id);
      const listaFiltrada = listaUsers.filter(
        (item) => item.id !== userDeletadoApi.id
      );
      setListaUsers(listaFiltrada);
    } catch (err) {
      console.log("Erro ao deletar usuário.", err);
    }
  };

  const editarUser = (itemUser: user) => {
    navigation.navigate("EditarUser", { user: itemUser });
  };

  useEffect(() => {
    buscarUsers();
    const unsubscribe = navigation.addListener("focus", () => {
      buscarUsers();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <NavbarWrapper>
      <View style={styles.container}>
        <View>
          <Pressable style={styles.botao} onPress={adicionarUser}>
            <Text>Adicionar novo usuário</Text>
          </Pressable>
        </View>
        {loading ? (
          <View>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            data={listaUsers}
            renderItem={({ item, index }) => (
              <View>
                <Text>{item.nome}</Text>
                <View>
                  <Pressable
                    style={styles.botao}
                    onPress={() => editarUser(item)}
                  >
                    <Text style={styles.textoBotao}>Alterar</Text>
                  </Pressable>
                  <Pressable
                    style={styles.botao}
                    onPress={() => {
                      if (item.id !== undefined) {
                        deletarUser(item.id);
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
    </NavbarWrapper>
  );
};
