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
import { FieldError, Noop } from "react-hook-form";
import { ErrorText } from "./ErrorText";

interface CustomInputProps {
  label: string;
  placeholderText: string;
  passwordShowFun?: () => void;
  showPassword?: boolean;
  onChange?: (...event: any[]) => void; //TODO: change optional props
  onBlur?: Noop; //TODO: change optional props
  value?: string; //TODO: change optional props
  formError?: FieldError; //TODO: change optional props
}

export default function CustomInput({
  label,
  placeholderText,
  passwordShowFun,
  showPassword,
  onBlur,
  onChange,
  value,
  formError,
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor="#999999"
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
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
      {formError && <ErrorText errorMessage={formError.message} />}
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
