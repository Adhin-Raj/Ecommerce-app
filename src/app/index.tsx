import { useFonts } from "expo-font";
import { Redirect, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSplashScreen from "../components/CustomSplashScreen";
import OnBoarding from "../components/OnBoarding";
import { useAuth } from "@clerk/clerk-expo";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const [isReady, setIsReady] = useState(false);
  const [loaded, error] = useFonts({
    sans: require("@/src/assets/fonts/General-sans.ttf"),
    "medium-sans": require("@/src/assets/fonts/General-sans-medium.ttf"),
  });

  useEffect(() => {
    if (!loaded && !error) return;
    const prepare = async () => {
      await new Promise((res) => setTimeout(res, 2000));

      setIsReady(true);
      await SplashScreen.hideAsync();
    };

    prepare();
  }, [loaded, error]);

  if (!isReady || !isLoaded) {
    return <CustomSplashScreen />;
  }

  if (isSignedIn) {
    return <Redirect href={"/(tabs)"} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OnBoarding />
    </SafeAreaView>
  );
}
