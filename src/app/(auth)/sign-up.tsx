import CustomButton from "@/src/components/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import { SignupSchema } from "@/src/schemas/signup/signup";
import { SignUpType } from "@/src/schemas/signup/signup.dto";
import { useSignUp } from "@clerk/clerk-expo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const { isLoaded, setActive, signUp } = useSignUp();
  const router = useRouter();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSignUpPress = async (data: SignUpType) => {
    console.log(data);
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if ((signUpAttempt.status = "complete")) {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(home)");
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  if (!isLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.subContainer}
      >
        {!pendingVerification ? (
          <>
            <Text style={styles.title}>Login to your account</Text>
            <Text style={styles.description}>It's great to see you again.</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="First Name"
                  placeholderText="Enter your first name"
                  onChange={onChange}
                  onBlur={onBlur}
                  formError={errors.firstName}
                  value={value}
                />
              )}
              name="firstName"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label="Last Name"
                  placeholderText="Enter your last name"
                  onChange={onChange}
                  onBlur={onBlur}
                  formError={errors.lastName}
                  value={value}
                />
              )}
              name="lastName"
            />

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
                  showPassword={showPassword}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  formError={errors.password}
                />
              )}
              name="password"
            />
            <CustomButton
              btnLabel="Continue"
              handlePress={handleSubmit(onSignUpPress)}
            />
          </>
        ) : (
          <>
            <Text style={styles.title}>Enter the 6 digit code</Text>
            <Text style={styles.description}>
              Enter the 6 digit code that receives on your email.
            </Text>
            <CustomInput
              label="Verify your email"
              placeholderText="Enter your verification code"
              value={code}
              onChange={(code) => setCode(code)}
            />
            <CustomButton btnLabel="Verify" handlePress={onVerifyPress} />
          </>
        )}
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
