import { RouteProp } from "@react-navigation/native";
import { jogo, user } from "./types";
import { StackNavigationProp } from "@react-navigation/stack";

// export type RootStackParamList = {
//   Home: undefined;
//   Login: undefined;
//   Registro: undefined;
//   Jogos: undefined;
//   Users: undefined;
//   EditarJogo: { jogo: jogo };
//   AdicionarJogo: undefined;
//   AdicionarUser: undefined;
//   EditarUser: { user: user };
// };

export type DrawerParamList = {
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

export type EditarJogoRouteProp = RouteProp<DrawerParamList, "EditarJogo">;

export type EditarUserRouteProp = RouteProp<DrawerParamList, "EditarUser">;

export type AdicionarJogoRouteProp = RouteProp<
  DrawerParamList,
  "AdicionarJogo"
>;

export type AdicionarUserRouteProp = RouteProp<
  DrawerParamList,
  "AdicionarUser"
>;

export type JogosScreenNavigationProp = StackNavigationProp<
  DrawerParamList,
  "Jogos"
>;
export type UsersScreenNavigationProp = StackNavigationProp<
  DrawerParamList,
  "Users"
>;
