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
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#FF3276",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    width: "70%",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
  },
});
