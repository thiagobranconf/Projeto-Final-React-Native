import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
};

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
      <KeyboardAvoidingView>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="EMAIL"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={senha}
              onChangeText={(text) => setSenha(text)}
              secureTextEntry={true}
              style={styles.input}
              placeholder="SENHA"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </View>
          <Pressable style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={styles.registerButton}
            onPress={() => navigation.navigate("Registro")}
          >
            <Text style={styles.registerText}>
              Não tem uma conta?{" "}
              <Text style={styles.highlight}>CADASTRE-SE</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
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
    paddingVertical: 5,
    borderRadius: 35,
    marginTop: 15,
    height: 62,
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
    color: "#FD0054",
    fontWeight: "500",
    textAlign: "right",
    marginRight: 10,
    fontSize: 18,
  },
  loginButton: {
    width: 380,
    backgroundColor: "#FD0054",
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
});
