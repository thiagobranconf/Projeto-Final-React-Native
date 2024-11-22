import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#eeccd7",
  },
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 200,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  input: {
    paddingLeft: 30,
    paddingVertical: 20,
    borderRadius: 35,
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "bold",
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cadastrarButton: {
    backgroundColor: "#FF3276",
    borderRadius: 35,
    padding: 15,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  cadastrarButtonText: {
    textAlign: "center",
    padding: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    textAlign: "center",
    color: "#000000",
    fontSize: 18,
  },
  highlight: {
    color: "#FF3276",
    fontWeight: "bold",
    marginLeft: 5,
  },
  imgbgContainer: {
    position: "relative",
    height: "100%",
  },
  imgbg: {
    position: "absolute",
    top: "25%",
    width: "150%",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});
