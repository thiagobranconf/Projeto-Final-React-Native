import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DetalhesJogoRouteProp } from "../../types/screensType";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";
import { styles } from "./styles";

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

export default DetalhesJogoScreen;
