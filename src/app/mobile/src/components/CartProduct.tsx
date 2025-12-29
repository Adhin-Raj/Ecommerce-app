import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductImg from '@/src/assets/images/product1.png'
import Ionicons from '@expo/vector-icons/Ionicons'
import MinusIcon from '@/src/assets/images/minus.png'
import PlusIcon from '@/src/assets/images/plus.png'


export default function CartProduct() {
  return (
    <View style={styles.container}>
      <Image source={ProductImg} alt='product-image' style={styles.productImg}/>
      <View style={styles.detailContainer}>
            <View style={styles.dataContainer}>
                <View>
                    <Text style={styles.title}>Regular Fit Slogan</Text>
                <Text style={styles.size}>Size L</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name='trash-outline' size={16} color='red'/>
                </TouchableOpacity>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>$ 1,190</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={MinusIcon} alt='minus-icon' style={styles.buttonIcon}/>
                </TouchableOpacity>
                <Text style={styles.quantity}>1</Text>
                <TouchableOpacity style={styles.button}>
                    <Image source={PlusIcon} alt='plus-icon' style={styles.buttonIcon}/>
                </TouchableOpacity>
                </View>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        borderRadius:10,
        borderColor:'#E6E6E6',
        borderWidth:1,
        padding:14,
        flexDirection:'row',
        gap:16
    },
    productImg:{
        width:83,
        height:79
    },
    detailContainer:{
        gap:18,
        width:'66%'
    },
    dataContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        fontFamily:"sans",
        letterSpacing:-0.3,

    },
    size:{
        fontFamily:'medium-sans',
        color:'#777777',
        fontSize:12
    },
    priceContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    price:{
        fontFamily:"sans",

    },
    quantityContainer:{
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    buttonIcon:{
        width:14,
        height:14
    },
    button:{
        borderRadius:4,
        borderColor:'#CCCCCC',
        borderWidth:1,
        padding:4
    },
    quantity:{
        fontFamily:'medium-sans'
    }
})
