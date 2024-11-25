import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
    backgroundColor: "#FF3276",
    width: "100%",
    padding: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    borderColor: "#ff3276",
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    width: "90%",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ff3276",
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
