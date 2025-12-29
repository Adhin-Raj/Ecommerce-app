import { StyleSheet, Text } from "react-native";

interface ErrorTextProps {
  errorMessage: string | undefined;
}

export const ErrorText = ({ errorMessage }: ErrorTextProps) => {
  return <Text style={styles.errorText}>{errorMessage}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: "red",
  },
});
