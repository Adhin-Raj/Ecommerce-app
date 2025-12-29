import Header from "@/src/components/Header";
import SubMenu from "@/src/components/SubMenu";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HelpCenter() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Help Center" />
      <View style={styles.line} />

      <View style={{ gap: 14 }}>
        <SubMenu
          iconName="headset-outline"
          menuLabel="Customer Service"
          customStyle={styles.helpContainer}
        />
        <SubMenu
          iconName="logo-whatsapp"
          menuLabel="Whatsapp"
          customStyle={styles.helpContainer}
        />
        <SubMenu
          iconName="browsers-outline"
          menuLabel="Website"
          customStyle={styles.helpContainer}
        />
        <SubMenu
          iconName="logo-facebook"
          menuLabel="Facebook"
          customStyle={styles.helpContainer}
        />
        <SubMenu
          iconName="logo-twitter"
          menuLabel="Twitter"
          customStyle={styles.helpContainer}
        />
        <SubMenu
          iconName="logo-instagram"
          menuLabel="Instagram"
          customStyle={styles.helpContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  line: {
    height: 1,
    backgroundColor: "#E6E6E6",
    marginVertical: 24,
    width: "100%",
  },
  helpContainer: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    borderColor: "#E6E6E6",
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontFamily: "medium-sans",
    color: "#1A1A1A",
    fontWeight: "semibold",
  },
});
