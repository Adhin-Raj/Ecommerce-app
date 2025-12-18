import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import EyeOff from "@/src/assets/images/eye-off.png";
import Eye from "@/src/assets/images/Eye.png";

interface CustomInputProps {
  label: string;
  placeholderText: string;
  passwordShowFun?: () => void;
  showPassword?: boolean;
}

export default function CustomInput({
  label,
  placeholderText,
  passwordShowFun,
  showPassword,
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor="#999999"
        secureTextEntry={showPassword}
        style={styles.input}
      />
      {label === "Password" && (
        <View>
          {showPassword ? (
            <Pressable style={styles.eyeBtn} onPress={passwordShowFun}>
              <Image source={EyeOff} alt="eye-off" width={20} height={20} />
            </Pressable>
          ) : (
            <Pressable style={styles.eyeBtn} onPress={passwordShowFun}>
              <Image source={Eye} alt="eye" width={20} height={20} />
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "medium",
    marginBottom: 4,
  },
  input: {
    borderColor: "#E6E6E6",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    position: "relative",
  },
  eyeBtn: {
    position: "absolute",
    right: 8,
    top: -34,
  },
});
