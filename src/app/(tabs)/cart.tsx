import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/Header";
import NoResult from "@/src/components/NoResult";

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Cart" />
      <NoResult
        description="When you add product, they'll appear here"
        iconName="cart-outline"
        text="Your Cart Is Empty"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
