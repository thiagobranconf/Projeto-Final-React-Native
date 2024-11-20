import {
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ImageBackground,
  Button,
} from "react-native";
import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/screensType";
import { styles } from "./styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        imageStyle={styles.imgbg}
        style={styles.imgbgContainer}
        source={require("../../../assets/controle.png")}
        resizeMode="contain"
      >
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
      </ImageBackground>
    </SafeAreaView>
  );
};
