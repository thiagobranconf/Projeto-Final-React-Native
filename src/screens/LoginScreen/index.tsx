import {
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { DrawerParamList } from "../../types/screensType";
import { styles } from "./styles";
import api from "../../services/api";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigation<NavigationProp<DrawerParamList>>();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.get("/users", {
        params: {
          email,
          senha,
        },
      });
      const user = response.data.find(
        (user: { email: string; senha: string }) =>
          user.email === email && user.senha === senha
      );
      if (user) {
        navigation.navigate("Home");
      } else {
        setError("Usuário ou senha inválidos");
      }
    } catch (err) {
      setError("Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          imageStyle={styles.imgbg}
          style={styles.imgbgContainer}
          source={require("../../../assets/controle.png")}
          resizeMode="contain"
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../../assets/logo.png")}
            />
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
              {loading ? (
                <ActivityIndicator size="large" color="#FD0054" />
              ) : (
                <View style={styles.buttonContainer}>
                  <Pressable style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                  </Pressable>
                </View>
              )}
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
              <Pressable
                style={styles.registerButton}
                onPress={() => navigation.navigate("Registro")}
              >
                <Text style={styles.registerText}>
                  Não tem uma conta?
                  <Text style={styles.highlight}>CADASTRE-SE</Text>
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
