import { RouteProp } from "@react-navigation/native";
import { jogo, user } from "./types";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Registro: undefined;
  Jogos: undefined;
  Users: undefined;
  EditarJogo: { jogo: jogo };
  AdicionarJogo: undefined;
  AdicionarUser: undefined;
  EditarUser: { user: user };
};

export type EditarJogoRouteProp = RouteProp<RootStackParamList, "EditarJogo">;

export type EditarUserRouteProp = RouteProp<RootStackParamList, "EditarUser">;

export type AdicionarJogoRouteProp = RouteProp<
  RootStackParamList,
  "AdicionarJogo"
>;

export type AdicionarUserRouteProp = RouteProp<
  RootStackParamList,
  "AdicionarUser"
>;

export type JogosScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Jogos"
>;
export type UsersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Users"
>;
