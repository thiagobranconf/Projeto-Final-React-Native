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
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#EECCD7", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 200, height: 250 }}
          source={{
            uri: "https://static.vecteezy.com/ti/vetor-gratis/p1/7410289-design-de-logotipo-de-loja-online-vetor.jpg",
          }}
        ></Image>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,

              color: "#041E42",
            }}
          >
            Entre em sua Conta
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Digite seu email"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />

            <TextInput
              value={senha}
              onChangeText={(text) => setSenha(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: senha ? 16 : 16,
              }}
              placeholder="Digite sua senha"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Mantenha-me logado</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Esqueceu a senha?
          </Text>
        </View>

        <View style={{ marginTop: 70 }} />

        <Pressable
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          style={{ marginTop: 15 }}
          onPress={() => navigation.navigate("Registro")}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Não possue uma conta? Cadastre-se
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
