import ArrowRight from "@/src/assets/images/arrow-right.png";
import CartProduct from "@/src/components/CartProduct";
import CustomButton from "@/src/components/CustomButton";
import Header from "@/src/components/Header";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Cart" />
      {/* <NoResult
        description="When you add product, they'll appear here"
        iconName="cart-outline"
        text="Your Cart Is Empty"
      /> */}
      <View style={styles.productContainer}>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <View style={styles.priceContainer}>
          <View style={styles.expContainer}>
            <Text style={styles.expName}>Sub-total</Text>
            <Text style={styles.amount}>$ 5,870</Text>
          </View>
          <View style={styles.expContainer}>
            <Text style={styles.expName}>VAT (%)</Text>
            <Text style={styles.amount}>$ 0.00</Text>
          </View>
          <View style={styles.expContainer}>
            <Text style={styles.expName}>Shipping fee</Text>
            <Text style={styles.amount}>$ 80</Text>
          </View>
          <View style={styles.line} />
          <Text
            style={[styles.amount, { alignSelf: "flex-end", marginBottom: 16 }]}
          >
            $ 5,950{" "}
          </Text>
          <CustomButton btnLabel="Go To Checkout" imgSrc={ArrowRight} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  productContainer: {
    marginTop: 20,
    gap: 14,
  },
  priceContainer: {
    paddingTop: 8,
    paddingBottom: 50,
    gap: 16,
  },
  expContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expName: {
    fontFamily: "medium-sans",
    color: "#777777",
    fontSize: 16,
  },
  amount: {
    fontFamily: "sans",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#E6E6E6",
    marginTop: 8,
  },
});
