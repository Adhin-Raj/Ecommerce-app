import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { SignupSchema } from "../schemas/signup/signup";
import { SignUpType } from "../schemas/signup/signup.dto";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignUpType) => {
    console.log(data);
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            label="Full Name"
            placeholderText="Enter your full name"
            onChange={onChange}
            onBlur={onBlur}
            formError={errors.fullName}
            value={value}
          />
        )}
        name="fullName"
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
      <Text style={styles.termsText}>
        By signing up you agree to our{" "}
        <Text style={{ textDecorationLine: "underline", fontFamily: "sans" }}>
          Terms, Privacy Policy
        </Text>
        and
        <Text style={{ textDecorationLine: "underline", fontFamily: "sans" }}>
          Cookie Use
        </Text>
      </Text>
      <CustomButton
        btnLabel="Create an Account"
        handlePress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  termsText: {
    color: "#1A1A1A",
    fontFamily: "medium-sans",
    marginBottom: 24,
  },
});
