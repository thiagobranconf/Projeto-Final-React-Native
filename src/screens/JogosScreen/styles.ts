import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  filtros: {
    marginBottom: 16,
  },
  filtroContainer: {
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  checkboxLabel: {
    marginLeft: 4,
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 8,
    padding: 4,
  },
  textFiltros: {
    fontSize: 24,
  },
  precoJogo: {
    fontSize: 16,
    padding: 8,
  },
});
