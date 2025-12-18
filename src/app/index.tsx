import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSplashScreen from "../components/CustomSplashScreen";
import OnBoarding from "../components/OnBoarding";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [isReady, setIsReady] = useState(false);
  const [loaded, error] = useFonts({
    sans: require("@/src/assets/fonts/General-sans.ttf"),
    "medium-sans": require("@/src/assets/fonts/General-sans-medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (!loaded && !error) return null;
      await new Promise((res) => setTimeout(res, 2000));
      setIsReady(true);
      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  if (!isReady) {
    return <CustomSplashScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OnBoarding />
    </SafeAreaView>
  );
}
