import { useRouter } from "expo-router";
import ArrowRight from "@/src/assets/images/arrow-right.png";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

export default function OnBoarding() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Define yourself in your unique way.</Text>
      <Image
        style={styles.bgImg}
        source={require("@/src/assets/images/onboarding-bg.png")}
        alt="onboarding-bg"
      />
      <View style={styles.btnContainer}>
        <CustomButton btnLabel="Get Started" imgSrc={ArrowRight} handlePress={()=>router.push('/login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 64,
    fontFamily: "sans",
    lineHeight: 60,
    letterSpacing: -5,
    marginTop: 12,
    marginLeft: 24,
  },
  bgImg: {
    position: "absolute",
    top: 56,
    left: 6,
  },
  btnContainer: {
    height: 110,
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    bottom: -18,
    justifyContent: "center",
    alignItems: "center",
    paddingInline: 24,
  },
});
