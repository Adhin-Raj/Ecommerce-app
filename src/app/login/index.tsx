import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding':'height'} style={styles.subContainer}>
      <Text style={styles.title}>Login to your account</Text>
      <Text style={styles.description}>It's great to see you again.</Text>
      
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  subContainer:{
    paddingInline:24
  },
  title:{
    fontSize:32,
    fontFamily:'sans',
    letterSpacing:-2,
    marginBottom:8
  },
  description:{
    color:'#808080',
    fontSize:16
  }
})