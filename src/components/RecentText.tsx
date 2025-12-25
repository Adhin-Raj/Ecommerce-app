import {  StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RecentText() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.recentText}>Jeans</Text>
        <TouchableOpacity>
          <Ionicons name="close-circle-outline" color={"#999999"} size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#E6E6E6",
    marginTop: 16,
  },
  recentText: {
    fontFamily: "medium-sans",
    fontSize: 16,
  },
});
