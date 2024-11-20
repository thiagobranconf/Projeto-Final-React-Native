import {
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
import { RootStackParamList } from "../../types/screensType";
import { styles } from "./styles";

export const RegistroScreen = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
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
          <Pressable style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={styles.registerButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.registerText}>
              Já tem uma conta? <Text style={styles.highlight}>ENTRAR</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
