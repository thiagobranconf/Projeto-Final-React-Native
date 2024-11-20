import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(238, 204, 215, 1)",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 400,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "white",
    borderRadius: 35,
    marginTop: 15,
    paddingLeft: 30,
  },
  input: {
    color: "black",
    marginVertical: 10,
    width: 300,
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordContainer: {
    marginTop: 18,
  },
  forgotPasswordText: {
    color: "#FF3276",
    fontWeight: "500",
    textAlign: "right",
    marginRight: 10,
    fontSize: 18,
  },
  loginButton: {
    width: 380,
    backgroundColor: "#FF3276",
    borderRadius: 35,
    padding: 15,
    height: 62,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    textAlign: "center",
    padding: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButton: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    textAlign: "center",
    color: "#000000",
    fontSize: 18,
  },
  highlight: {
    color: "#FD0054",
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
});