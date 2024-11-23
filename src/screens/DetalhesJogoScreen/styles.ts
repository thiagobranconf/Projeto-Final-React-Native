import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EECCD7",
  },
  containerDetalhes: {
    backgroundColor: "#FF3276",
    paddingVertical: 12,
  },
  detalhes: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  content: {
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    margin: 12,
    borderWidth: 1,
    borderColor: "#ff3276",
  },
  imagem: {
    width: "100%",
    height: 300,
    marginBottom: 16,
    borderRadius: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
    color: "#ff3276",
  },
  descricao: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "500",
    color: "#ff3276",
  },
  descricaoJogo: {
    fontSize: 16,
    textAlign: "left",
  },
  precoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
    paddingVertical: 10,
  },
  preco: {
    color: "#ff3276",
    fontSize: 24,
    fontWeight: "600",
  },
  precoJogo: {
    fontSize: 24,
  },
});
