import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface CustomButtonProps {
  btnLabel: string;
  imgSrc?: ImageSourcePropType;
  handlePress?: () => void;
  customBtnStyle?: Object;
  customLabelStyle?: Object;
}

export default function CustomButton({
  btnLabel,
  handlePress,
  customBtnStyle,
  customLabelStyle,
  imgSrc,
}: CustomButtonProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={[styles.btn, customBtnStyle]}
      onPress={handlePress}
    >
      <Text style={[styles.btnLabel, customLabelStyle]}>{btnLabel}</Text>
      {imgSrc && (
        <Image source={imgSrc} alt="arrow-right" width={24} height={24} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#1A1A1A",
    width: "100%",
    paddingBlock: 16,
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
