import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IoniconsName } from "./NoResult";

interface SubMenuType {
  menuLabel: string;
  iconName: IoniconsName;
  path?: () => void;
  hasForwardIcon?: boolean;
  customStyle?: Object;
}

export default function SubMenu({
  iconName,
  menuLabel,
  path,
  hasForwardIcon,
  customStyle,
}: SubMenuType) {
  return (
    <TouchableOpacity
      style={[styles.menuContainer, customStyle]}
      onPress={path}
    >
      <View style={styles.iconText}>
        <Ionicons name={iconName} size={24} />
        <Text style={styles.text}>{menuLabel}</Text>
      </View>
      {hasForwardIcon && (
        <Ionicons name="chevron-forward-outline" size={24} color="gray" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
