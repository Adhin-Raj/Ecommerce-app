import ArrowRight from "@/src/assets/images/arrow-right.png";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnBoarding() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Define yourself in your unique way.</Text>
      <Image
        style={styles.bgImg}
        source={require("@/src/assets/images/onboarding-bg.png")}
        alt="onboarding-bg"
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>router.push('/login')}>
          <Text style={styles.btnLabel}>Get Started</Text>
          <Image source={ArrowRight} alt="arrow-right" width={24} height={24} />
        </TouchableOpacity>
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
  btn: {
    backgroundColor: "#1A1A1A",
    width: "100%",
    paddingBlock: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
  },
  btnLabel: {
    color: "#FFFFFF",
    fontFamily: "medium-sans",
    fontSize: 16,
  },
});
