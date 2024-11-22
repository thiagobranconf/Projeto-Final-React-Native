import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#EECCD7",
  },
  header: {
    paddingTop: 40,
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: "#FF3276",
  },
  menuItem: {
    backgroundColor: "#F3ADC4",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
  },
  menuText: {
    fontSize: 16,
    color: "#FF3276",
  },
  footer: {
    marginTop: "auto",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#EDEDED",
  },
  footerButton: {
    paddingVertical: 10,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#FF0000",
  },
});
