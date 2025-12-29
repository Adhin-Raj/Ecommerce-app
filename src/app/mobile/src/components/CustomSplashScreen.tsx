import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import CurveLineSvg from "./CurveLineSvg";
import IconSvg from "./IconSvg";

export default function CustomSplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <CurveLineSvg top={0} width={811.3} height={853.69} />
        <CurveLineSvg top={24} width={738.96} height={777.57} />
        <CurveLineSvg top={44} width={671.04} height={706.1} />
        <CurveLineSvg top={64} width={602.04} height={633.49} />
        <IconSvg customStyle={styles.icon} />
      </View>
      <ActivityIndicator color="white" size={46} style={styles.loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  svgContainer: {
    flex: 1,
    top: 126,
    overflow: "hidden",
  },
  icon: {
    position: "absolute",
    top: 260,
    right: "33%",
    height: 200,
    zIndex: 100,
  },
  loading: {
    marginBottom: 40,
  },
});
