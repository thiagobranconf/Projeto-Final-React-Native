import React from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "../Navbar/Navbar";
import { styles } from "./styles";

export const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>{children}</View>
    </View>
  );
};
