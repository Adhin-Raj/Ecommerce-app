import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export type IoniconsName = keyof typeof Ionicons.glyphMap;

interface NoResultProps{
  iconName:IoniconsName,
  text:string,
  description:string
}

export default function NoResult({description,iconName,text}:NoResultProps) {
  return (
    <View style={styles.container}>
     <Ionicons name={iconName} size={64} color={'gray'} style={{marginBottom:20}}/>
     <Text style={styles.boldText}>{text}</Text>
     <Text style={styles.subText}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
    boldText:{
        fontFamily:'sans',
        fontSize:20,
        letterSpacing:-0.6,
        marginBottom:12
    },
    subText:{
        fontSize:14,
        color:'#777777',
        textAlign:'center',
        maxWidth:201,
        fontFamily:"medium-sans",
        letterSpacing:-0.8
    }
})