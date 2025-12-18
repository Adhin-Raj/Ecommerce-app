import FacebookLogo from "@/src/assets/images/facebook.png";
import GoogleLogo from "@/src/assets/images/google.png";
import CustomButton from "@/src/components/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.subContainer}
      >
        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.description}>It's great to see you again.</Text>
        <CustomInput label="Email" placeholderText="Enter your email address" />
        <CustomInput
          label="Password"
          placeholderText="Enter your password"
          passwordShowFun={handleShowPassword}
          showPassword={showPassword}
        />
        <View style={styles.forgotPassword}>
          <Text style={styles.linkText}>Forgot your password? </Text>
          <Link
            href={"/"}
            style={[styles.linkText, { textDecorationLine: "underline" }]}
          >
            Reset your password
          </Link>
        </View>
        <CustomButton btnLabel="Login" />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBlock: 24,
          }}
        >
          <View style={styles.line} />
          <Text style={{ color: "#808080", marginInline: 10 }}>Or</Text>
          <View style={styles.line} />
        </View>
        <CustomButton
          btnLabel="Login with Google"
          imgSrc={GoogleLogo}
          customBtnStyle={styles.googleBtn}
          customLabelStyle={styles.googleBtnLabel}
        />
        <CustomButton
          btnLabel="Login with Facebook"
          imgSrc={FacebookLogo}
          customBtnStyle={styles.facebookBtn}
        />
        <View style={styles.login}>
          <Text
            style={[
              styles.linkText,
              { fontFamily: "medium-sans", color: "#777777" },
            ]}
          >
            Don't have an account?{" "}
          </Text>
          <Link
            href={"/"}
            style={[
              styles.linkText,
              { textDecorationLine: "underline", fontFamily: "sans" },
            ]}
          >
            Join
          </Link>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingInline: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: "sans",
    letterSpacing: -2,
    marginBottom: 8,
    marginTop: 12,
  },
  description: {
    color: "#808080",
    fontSize: 16,
    marginBottom: 24,
  },
  forgotPassword: {
    flexDirection: "row",
    marginBottom: 24,
  },
  linkText: {
    color: "#1A1A1A",
    fontSize: 14,
  },
  line: {
    height: 1,
    width: "46%",
    backgroundColor: "#E6E6E6",
  },
  googleBtn: {
    backgroundColor: "white",
    flexDirection: "row-reverse",
    marginBottom: 16,
  },
  facebookBtn: {
    backgroundColor: "#1877F2",
    flexDirection: "row-reverse",
  },
  googleBtnLabel: {
    color: "#1A1A1A",
  },
  login: {
    flexDirection: "row",
    marginTop: 140,
    justifyContent: "center",
  },
});
