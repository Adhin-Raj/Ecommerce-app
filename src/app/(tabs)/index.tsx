import Home from "@/src/components/Home";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, paddingInline: 20 }}>
      <StatusBar />
      <SignedIn>
        <Home />
      </SignedIn>
      <SignedOut>
        <Redirect href={"/(auth)/sign-in"} />
      </SignedOut>
    </SafeAreaView>
  );
}
