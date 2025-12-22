import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { LoginSchema } from "../schemas/login/login";
import { LoginType } from "../schemas/login/login.dto";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginType) => {
    console.log(data);
  };

  return (
    <View>
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
        btnLabel="Login"
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
