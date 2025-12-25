import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProductImg from "@/src/assets/images/product1.png";
import HeartImage from '@/src/assets/images/heart.png'

export default function Card() {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          source={ProductImg}
          alt="product-icon"
          width={161}
          height={174}
        />
        <TouchableOpacity style={styles.wishlistBtn}>
            <Image source={HeartImage} alt="heart-image" style={{width:20,height:20}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Regular Fit Slogan</Text>
        <Text style={styles.price}>$1,190</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    cardContainer:{
        marginTop:24,
        width:'50%'
    },
  detailsContainer: {
    gap:4
  },
  title:{
    fontFamily:'medium-sans',
    fontSize:14,
    letterSpacing:-0.6
  },
  price:{
    fontSize:14,
    fontFamily:'sans'
  },
  wishlistBtn:{
    position:'absolute',
    backgroundColor:'#FFF',
    borderRadius:10,
    padding:10,
    right:12,
    top:12,
    justifyContent:'center',
    alignItems:'center',

  }

});
