import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RecentText from './RecentText'

export default function RecentSearch() {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Recent Searches</Text>
        <TouchableOpacity>
            <Text style={styles.clearBtnText}>clear all</Text>
        </TouchableOpacity>
      </View>
      <RecentText/>
      <RecentText/>
      <RecentText/>
      <RecentText/>
      <RecentText/>
    </>
  )
}

const styles = StyleSheet.create({ 
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20
    },
    title:{
        color:"#1A1A1A",
        fontSize:20,
        fontFamily:'sans',
        letterSpacing:-1
    },
    clearBtnText:{
        fontFamily:'medium-sans',
        textDecorationLine:'underline'
    },
   
})