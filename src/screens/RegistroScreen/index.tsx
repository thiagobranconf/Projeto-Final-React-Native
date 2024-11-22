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
import { RootStackParamList } from "../../types/screensType";
import { styles } from "./styles";
import api from "../../services/api";

export const RegistroScreen = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleRegister = async () => {
    if (senha !== confirmaSenha) {
      setError("As senhas não coincidem");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await api.post("/users", {
        nome,
        email,
        senha,
      });
      if (response.status === 201) {
        navigation.navigate("Login");
      } else {
        setError("Erro ao cadastrar usuário");
      }
    } catch (err) {
      setError("Erro ao cadastrar usuário");
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
                  value={nome}
                  onChangeText={(text) => setNome(text)}
                  style={styles.input}
                  placeholder="USERNAME"
                  placeholderTextColor="gray"
                />
              </View>
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
              <View style={styles.inputContainer}>
                <TextInput
                  value={confirmaSenha}
                  onChangeText={(text) => setConfirmaSenha(text)}
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="CONFIRMAR SENHA"
                  placeholderTextColor="gray"
                />
              </View>
              {loading ? (
                <ActivityIndicator size="large" color="#FD0054" />
              ) : (
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={styles.cadastrarButton}
                    onPress={handleRegister}
                  >
                    <Text style={styles.cadastrarButtonText}>CADASTRAR</Text>
                  </Pressable>
                </View>
              )}
              {error ? <Text style={styles.errorText}>{error}</Text> : null}

              <Pressable
                style={styles.loginButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.loginText}>
                  Já tem uma conta? <Text style={styles.highlight}>ENTRAR</Text>
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
