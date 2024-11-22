import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    position: "relative",
    height: "100%",
  },
  imgbg: {
    position: "absolute",
    top: "4%",
    width: "250%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  filtroNovoJogo: {
    flexDirection: "row",
    backgroundColor: "#FF3276",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  botaoExpandir: {},
  filtros: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FF3276",
    backgroundColor: "#EECCD7",
  },
  textFiltros: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  jogosText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
  },
  botaoAdd: {
    backgroundColor: "#EECCD7",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    width: 110,
  },
  textAdd: {
    textAlign: "center",
    fontSize: 16,
    color: "#FF3276",
    fontWeight: "bold",
  },
  filtroContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#FF3276",
    backgroundColor: "#fff",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#FF3276",
  },
  precoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  precos: {
    width: "45%",
  },
  precoText: {
    color: "#FF3276",
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF3276",
    marginVertical: 8,
    padding: 4,
    backgroundColor: "#f5f5f5",
  },
  botoesFiltro: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  botao: {
    backgroundColor: "#FF3276",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginBottom: 4,
    width: 150,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
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

  precoJogo: {
    fontSize: 16,
    padding: 8,
  },
});
