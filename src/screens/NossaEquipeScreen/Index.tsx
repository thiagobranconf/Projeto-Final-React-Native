import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { NavbarWrapper } from "../../components/NavbarWrapper/NavbarWrapper";

const Administradores = [
  {
    id: 1,
    nome: "Thiago Branco",
    imagem: require("../../../assets/THIAGO BRANCO.png"),
    descricao: "Apostador profissional em corrida de cavalos.",
  },
  {
    id: 2,
    nome: "Fernanda Canto",
    imagem: require("../../../assets/FERNANDA CANTO.png"),
    descricao: "Tem foto de e-girl no discord ",
  },
  {
    id: 4,
    nome: "Tiago Ventura",
    imagem: require("../../../assets/TIAGO VENTURA.png"),
    descricao: "Comediante dos 4 amigos",
  },
  {
    id: 5,
    nome: "Gabriel Siqueira",
    imagem: require("../../../assets/GABRIEL.jpeg"),
    descricao: "emo",
  },
  {
    id: 6,
    nome: "Eduarda Goulart",
    imagem: require("../../../assets/Eduarda Goulart.png"),
    descricao: "Super Mãe",
  },
  {
    id: 7,
    nome: "Vitor Ferreira",
    imagem: require("../../../assets/logo.png"),
    descricao: "Fisiculturista",
  },
];

export const NossaEquipe = () => {
  return (
    <NavbarWrapper>
      <ImageBackground
        source={require("../../../assets/controle.png")}
        imageStyle={styles.imgbg}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Nossa Equipe</Text>
          {Administradores.map((admin) => (
            <View key={admin.id} style={styles.card}>
              <Image source={admin.imagem} style={styles.image} />
              <Text style={styles.name}>{admin.nome}</Text>
              <Text style={styles.description}>{admin.descricao}</Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </NavbarWrapper>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  imgbg: {
    position: "absolute",
    top: "4%",
    width: "250%",
  },
});
