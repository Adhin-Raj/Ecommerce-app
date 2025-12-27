import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/Header";
import { SignOutButton } from "@/src/components/SignOutButton";
import SubMenu from "@/src/components/SubMenu";

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Account" />
      <View style={[styles.line, { marginTop: 24 }]} />
      <SubMenu iconName="cube-outline" menuLabel="My Orders" />
      <View style={styles.boldLine} />
      <SubMenu iconName="person-outline" menuLabel="My Details" />
      <View style={styles.line} />
      <SubMenu iconName="home-outline" menuLabel="Address Book" />
      <View style={styles.line} />
      <SubMenu iconName="card-outline" menuLabel="Payment Methods" />
      <View style={styles.line} />
      <SubMenu iconName="notifications-outline" menuLabel="Notifications" />
      <View style={styles.boldLine} />
      <SubMenu iconName="help-circle-outline" menuLabel="FAQs" />
      <View style={styles.line} />
      <SubMenu iconName="information" menuLabel="Help Center" />
      <View style={styles.boldLine} />
      <SignOutButton />
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
    width: "100%",

    backgroundColor: "#E6E6E6",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  iconText: {
    flexDirection: "row",
    gap: 16,
  },
  text: {
    fontSize: 16,
    color: "#1A1A1A",
    fontFamily: "medium-sans",
  },
  boldLine: {
    height: 8,
    backgroundColor: "#E6E6E6",
  },
});
