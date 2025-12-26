import { useClerk } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/(auth)/sign-in");
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  return (
    <TouchableOpacity onPress={handleSignOut} style={styles.button}>
      <Ionicons
        name="log-out-sharp"
        color="red"
        size={20}
        style={styles.iconStyle}
      />
      <Text style={styles.text}>LogOut</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  iconStyle: {
    transform: [{ rotate: "180deg" }],
  },
  text: {
    fontSize: 16,
    fontFamily: "medium-sans",
    color: "red",
  },
});