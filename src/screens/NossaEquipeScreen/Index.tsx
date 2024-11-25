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
import { styles } from "./styles";

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
    imagem: require("../../../assets/VITOR FERREIRA.jpeg"),
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
