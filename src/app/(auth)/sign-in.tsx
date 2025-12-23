import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Page() {
  const { isLoaded, setActive, signIn } = useSignIn();
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {
    if (!isLoaded) return;
    try {
      const signInAttempt = await signIn.create({
        identifier: userData.email,
        password: userData.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  return (
    <View style={{paddingInline:20}}>
        <Text>Sign in</Text>
        <TextInput autoCapitalize="none" value={userData.email} placeholder="Enter Email" onChangeText={(email)=>setUserData(prev=>{
            return{
                ...prev,
                email
            }
        })}/>
        <TextInput secureTextEntry={true} value={userData.password} placeholder="Enter Password" onChangeText={(password)=>setUserData(prev=>{
            return{
                ...prev,
                password
            }
        })}/>
           <TouchableOpacity onPress={onSignInPress}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}
