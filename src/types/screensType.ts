import { RouteProp } from "@react-navigation/native";
import { jogo, user } from "./types";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Jogos: undefined;
  Users: undefined;
  AdicionarUser: undefined;
  EditarUser: { user: user };
  NossaEquipe: undefined;
};

export type JogosNavigatorParamList = {
  JogosPrincipal: undefined;
  AdicionarJogo: undefined;
  EditarJogo: { jogo: jogo };
  DetalhesJogo: { jogo: jogo };
};
export type UsersNavigatorParamList = {
  UsersPrincipal: undefined;
  AdicionarUser: undefined;
  EditarUser: { user: user };
};

export type DetalhesJogoRouteProp = RouteProp<
  JogosNavigatorParamList,
  "DetalhesJogo"
>;

export type EditarJogoRouteProp = RouteProp<
  JogosNavigatorParamList,
  "EditarJogo"
>;

export type AdicionarJogoRouteProp = RouteProp<
  JogosNavigatorParamList,
  "AdicionarJogo"
>;

export type AdicionarUserRouteProp = RouteProp<
  UsersNavigatorParamList,
  "AdicionarUser"
>;
export type EditarUserRouteProp = RouteProp<
  UsersNavigatorParamList,
  "EditarUser"
>;

export type JogosScreenNavigationProp = StackNavigationProp<
  JogosNavigatorParamList,
  "JogosPrincipal"
>;

export type UsersScreenNavigationProp = StackNavigationProp<
  UsersNavigatorParamList,
  "UsersPrincipal"
>;
