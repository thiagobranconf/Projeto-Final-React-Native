import { RouteProp } from "@react-navigation/native";
import { jogo } from "./types";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Jogos: undefined;
  EditarJogo: { jogo: jogo };
};

export type EditarJogoRouteProp = RouteProp<RootStackParamList, "EditarJogo">;

export type JogosScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Jogos"
>;
