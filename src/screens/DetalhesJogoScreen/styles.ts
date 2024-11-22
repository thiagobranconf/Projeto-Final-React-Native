import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
