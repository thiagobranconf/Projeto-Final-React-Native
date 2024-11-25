import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EECCD7",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: "#ff3276",
    width: 500,
    borderRadius: 16,
    backgroundColor: "#f5f5f5",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  nomeContainer: {
    backgroundColor: "#FF3276",
    width: "100%",
    height: 50,
    justifyContent: "center",
    padding: 8,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  userNome: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
  botoesContainer: {
    padding: 12,
    gap: 8,
  },
  botaoPress: {
    backgroundColor: "#EECCD7",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },

  textoBotao: {
    color: "#FF3276",
    fontSize: 16,
    fontWeight: "bold",
  },
  headContainer: {
    flexDirection: "row",
    backgroundColor: "#FF3276",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 12,
  },
  usersText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
  },
  textAdd: {
    textAlign: "center",
    fontSize: 16,
    color: "#FF3276",
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "#EECCD7",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    width: 120,
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
  },
});
