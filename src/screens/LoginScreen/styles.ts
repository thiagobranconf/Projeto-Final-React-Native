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
    marginLeft: "3%",
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
    backgroundColor: "#FF3276",
    borderRadius: 35,
    padding: 15,
    marginTop: 15,
    marginHorizontal: 10,
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
