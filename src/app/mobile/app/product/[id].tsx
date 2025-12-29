import Header from "@/src/components/Header";
import { ProductType } from "@/src/components/Home";
import { useGetProductsQuery } from "@/src/store/api";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const { id } = useLocalSearchParams();
  const { data } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      setProduct(data[Number(id) - 1]);
    }
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Details" />
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: product?.image }}
            alt={product?.title}
            style={styles.productImg}
          />
          <TouchableOpacity style={styles.wishlistBtn}>
            <Ionicons name={"heart-outline"} size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product?.title}</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Ionicons name="star" color="#FFA928" size={18} />
            <Text style={styles.text}>
              {product?.rating.rate}/5{" "}
              <Text style={[styles.text, { color: "#4D4D4D" }]}>
                ({product?.rating.count} reviews)
              </Text>
            </Text>
          </View>
          <Text style={[styles.text, { color: "#777777" }]}>
            {product?.description}
          </Text>
        </View>

        <Text style={{ fontSize: 20, fontFamily: "sans" }}>Choose size</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>L</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{position:'fixed'}}>
            <CustomButton btnLabel="Add to Cart"/>
      </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  productImg: {
    marginTop: 20,
    width: 311,
    height: 368,
    borderRadius: 10,
    objectFit: "contain",
  },

  wishlistBtn: {
    position: "absolute",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    right: 24,
    top: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    position: "relative",
  },
  detailsContainer: {
    gap: 12,
    marginVertical: 12,
  },
  title: {
    fontFamily: "sans",
    fontSize: 24,
    color: "#1A1A1A",
  },
  text: {
    fontFamily: "medium-sans",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: "#E6E6E6",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
  },
  filterText: {
    fontFamily: "medium-sans",
    fontSize: 16,
  },
});
