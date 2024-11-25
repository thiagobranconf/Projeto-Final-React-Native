import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EECCD7",
  },
  containerInput: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    padding: 12,
    gap: 5,
    marginTop: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ff3276",
  },
  containerAlterar: {
    backgroundColor: "#FF3276",
    paddingVertical: 12,
  },
  add: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botaoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#FF3276",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    width: "45%",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
  },
});
