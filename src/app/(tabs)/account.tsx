import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/Header";
import { SignOutButton } from "@/src/components/SignOutButton";

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Account" />
      <SignOutButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
