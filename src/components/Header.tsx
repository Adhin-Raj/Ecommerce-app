import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BellIcon from "@/src/assets/images/bell.png";
import Ionicons from "@expo/vector-icons/Ionicons";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.headContainer}>
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={BellIcon}
        alt="bell-icon"
        style={{ height: 24, width: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
    top:0,
    position:'fixed'
  },
  title: {
    color: "#1A1A1A",
    fontFamily: "sans",
    fontSize: 24,
    letterSpacing: -1,
  },
});
