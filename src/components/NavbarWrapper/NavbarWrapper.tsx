import React from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "../Navbar/Navbar";

export const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238, 204, 215, 1)",
  },
  content: {
    flex: 1,
    paddingTop: 80,
  },
});
