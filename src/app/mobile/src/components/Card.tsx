import { useAuth, useUser } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { axiosInstance } from "../service/axios";
import { ProductType } from "./Home";

interface CardProps extends ProductType {
  isWishlist?: boolean;
}

export default function Card({
  isWishlist = false,
  price,
  title,
  id,
  image,
}: CardProps) {
  const [like, setLike] = useState(false);
  const router = useRouter();
  const { getToken } = useAuth();
  const { user } = useUser();

  const handleLike = () => {
    setLike(!like);
  };

  const handleWishlist = async () => {
    handleLike();
    try {
      const token = await getToken();
      const res = await axiosInstance.post(
        "/wishlist",
        { userId: user?.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        router.push({
          pathname: "/product/[id]",
          params: { id: id },
        })
      }
    >
      <View>
        <Image
          source={{ uri: image }}
          alt="product-icon"
          width={161}
          height={174}
          style={{ width: 161, height: 174, objectFit: "contain" }}
        />
        <TouchableOpacity style={styles.wishlistBtn} onPress={handleWishlist}>
          <Ionicons
            name={like || isWishlist ? "heart-sharp" : "heart-outline"}
            size={20}
            color={like ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 24,
    width: "50%",
    marginRight: 6,
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
