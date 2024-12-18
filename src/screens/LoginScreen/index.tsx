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
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/screensType";
import { styles } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const { login, loading } = useAuth();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    setError("");
    try {
      await login(email, senha);
    } catch (err) {
      setError("Erro ao fazer login");

      Alert.alert(
        "Erro de login",
        "Email ou senha incorretos. Tente novamente.",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
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
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          > */}
            <View style={styles.contentContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                  placeholder="EMAIL"
                  placeholderTextColor="gray"
                  autoCapitalize="none"
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
                  <Text style={styles.highlight}> CADASTRE-SE</Text>
                </Text>
              </Pressable>
            </View>
            {/* </KeyboardAvoidingView> */}
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
