import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2B2024",
    paddingHorizontal: 15,
    height: 80,
    zIndex: 1,
  },
  back: {
    padding: 5,
    marginTop: 5,
  },
  hamburger: {
    position: "absolute",
    top: 25,
    right: 15,
    marginTop: 5,
    padding: 5,
    zIndex: 10,
    elevation: 10,
  },
  hamburgerText: {
    fontSize: 28,
    color: "#FFF",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 5,
    marginRight: 20,
  },
  logo: {
    marginTop: 10,
    height: 30,
    width: 30,
  },
  logoText: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "Bungee-Regular",
    textShadowColor: "rgba(252, 36, 248, 1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
});
