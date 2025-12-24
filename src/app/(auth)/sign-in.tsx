import CustomButton from "@/src/components/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import { SignInSchema } from "@/src/schemas/login/login";
import { SignInType } from "@/src/schemas/login/login.dto";
import { useSignIn } from "@clerk/clerk-expo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FacebookLogo from "@/src/assets/images/facebook.png";
import GoogleLogo from "@/src/assets/images/google.png";

export default function Page() {
  const { isLoaded, setActive, signIn } = useSignIn();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSignInPress = async (data: SignInType) => {
    if (!isLoaded) return;
    console.log(data);
    try {
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.subContainer}
      >
        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.description}>It's great to see you again.</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Email"
              placeholderText="Enter your email address"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              formError={errors.email}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Password"
              placeholderText="Enter your password"
              passwordShowFun={handleShowPassword}
              showPassword={!showPassword}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              formError={errors.password}
            />
          )}
          name="password"
        />
        <Text style={styles.termsText}>
          By signing up you agree to our
          <Text style={{ textDecorationLine: "underline", fontFamily: "sans" }}>
            Terms, Privacy Policy
          </Text>
          and
          <Text style={{ textDecorationLine: "underline", fontFamily: "sans" }}>
            Cookie Use
          </Text>
        </Text>
        <CustomButton
          btnLabel="Login"
          handlePress={handleSubmit(onSignInPress)}
        />
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
            href={"/(auth)/sign-up"}
            style={[
              styles.linkText,
              { textDecorationLine: "underline", fontFamily: "sans"},
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
  termsText: {
    color: "#1A1A1A",
    fontFamily: "medium-sans",
    marginBottom: 24,
  },
  login: {
    flexDirection: "row",
    marginTop: 126,
    justifyContent: "center",
  },
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
});
