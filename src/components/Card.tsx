import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProductImg from "@/src/assets/images/product1.png";
import HeartImage from "@/src/assets/images/heart.png";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CardProps {
  isWishlist?: boolean;
}

export default function Card({ isWishlist=false }: CardProps) {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          source={ProductImg}
          alt="product-icon"
          width={161}
          height={174}
        />
        {!isWishlist ? (
          <TouchableOpacity style={styles.wishlistBtn}>
            <Ionicons name="heart-outline" size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.wishlistBtn}>
            <Ionicons name="heart-sharp" size={20} color={'red'} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Regular Fit Slogan</Text>
        <Text style={styles.price}>$1,190</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 24,
    width: "50%",
  },
  detailsContainer: {
    gap: 4,
  },
  title: {
    fontFamily: "medium-sans",
    fontSize: 14,
    letterSpacing: -0.6,
  },
  price: {
    fontSize: 14,
    fontFamily: "sans",
  },
  wishlistBtn: {
    position: "absolute",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    right: 12,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
