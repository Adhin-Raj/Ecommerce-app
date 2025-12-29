import Header from "@/src/components/Header";
import { SignOutButton } from "@/src/components/SignOutButton";
import SubMenu from "@/src/components/SubMenu";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Account" />
      <View style={[styles.line, { marginTop: 24 }]} />
      <SubMenu
        iconName="cube-outline"
        menuLabel="My Orders"
        hasForwardIcon={true}
      />
      <View style={styles.boldLine} />
      <SubMenu
        iconName="person-outline"
        menuLabel="My Details"
        path={() => router.push("/my-details")}
        hasForwardIcon={true}
      />
      <View style={styles.line} />
      <SubMenu
        iconName="home-outline"
        menuLabel="Address Book"
        hasForwardIcon={true}
      />
      <View style={styles.line} />
      <SubMenu
        iconName="card-outline"
        menuLabel="Payment Methods"
        hasForwardIcon={true}
      />
      <View style={styles.line} />
      <SubMenu
        iconName="notifications-outline"
        menuLabel="Notifications"
        hasForwardIcon={true}
      />
      <View style={styles.boldLine} />
      <SubMenu
        iconName="help-circle-outline"
        menuLabel="FAQs"
        hasForwardIcon={true}
      />
      <View style={styles.line} />
      <SubMenu
        iconName="information"
        menuLabel="Help Center"
        path={() => router.push("/help-center")}
        hasForwardIcon={true}
      />
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
