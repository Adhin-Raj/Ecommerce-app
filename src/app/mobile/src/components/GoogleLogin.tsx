import GoogleLogo from "@/src/assets/images/google.png";
import { useSSO } from "@clerk/clerk-expo";
import { StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

interface GoogleLoginProps{
    label:string
}

export default function GoogleLogin({label}:GoogleLoginProps) {
  const { startSSOFlow } = useSSO();

  const onGooglePress = async () => {
    try {
      const result = await startSSOFlow({
        strategy: "oauth_google",
      });

      const { createdSessionId, setActive } = result;

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (error) {
      console.error("Google SSO error:", error);
    }
  };

  return (
    <CustomButton
      btnLabel={label}
      imgSrc={GoogleLogo}
      handlePress={onGooglePress}
      customBtnStyle={styles.googleBtn}
      customLabelStyle={styles.googleBtnLabel}
    />
  );
}

const styles = StyleSheet.create({
  googleBtn: {
    backgroundColor: "white",
    flexDirection: "row-reverse",
    marginBottom: 16,
  },
  googleBtnLabel: {
    color: "#1A1A1A",
  },
});
