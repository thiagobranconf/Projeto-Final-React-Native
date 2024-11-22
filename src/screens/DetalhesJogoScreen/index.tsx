import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DetalhesJogoRouteProp } from "../../types/screensType";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";

export const DetalhesJogoScreen = () => {
  const route = useRoute<DetalhesJogoRouteProp>();
  const { nome, imagemurl, descricao, preco } = route.params.jogo;

  return (
    <NavbarWrapper>
      <View style={styles.container}>
        <View style={styles.containerDetalhes}>
          <Text style={styles.detalhes}>Detalhes do Jogo</Text>
        </View>
        <Text style={styles.nome}>{nome}</Text>
        <Image source={{ uri: imagemurl }} style={styles.imagem} />
        <View>
          <Text style={styles.descricao}>Descrição</Text>
          <Text style={styles.descricaoJogo}>{descricao}</Text>
        </View>
        <View style={styles.precoContainer}>
          <Text style={styles.preco}>Preço R$</Text>
          <Text style={styles.precoJogo}>{preco}</Text>
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
  containerDetalhes: {
    backgroundColor: "#000000",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  detalhes: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  imagem: {
    width: "100%",
    height: 300,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
  },
  descricao: {
    color: "#000000",
    fontSize: 20,
    marginTop: 16,
    textAlign: "left",
    fontWeight: "500",
  },
  descricaoJogo: {
    fontSize: 16,
    textAlign: "center",
  },
  precoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
    paddingVertical: 10,
  },
  preco: {
    fontSize: 24,
    fontWeight: "600",
  },
  precoJogo: {
    fontSize: 24,
  },
});

export default DetalhesJogoScreen;
