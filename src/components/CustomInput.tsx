import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CustomInput() {
  return (
    <View>
      <Text>Email</Text>
      <TextInput placeholder='Enter your email address' />
    </View>
  )
}

const styles = StyleSheet.create({})