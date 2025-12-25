import CustomButton from "@/src/components/CustomButton";
import Home from "@/src/components/Home";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { Link, Redirect } from "expo-router";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      Linking.openURL(Linking.createURL("/"));
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingInline: 20 }}>
      <StatusBar />
      <SignedIn>
        <Home/>
        <CustomButton handlePress={handleSignOut} btnLabel="sign out"/>
      </SignedIn>
      <SignedOut>
          <Redirect href={'/(auth)/sign-in'}/>
      </SignedOut>
      {/* <Home/>   */}
    </SafeAreaView>
  );
}
