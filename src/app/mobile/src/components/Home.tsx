import BellIcon from "@/src/assets/images/bell.png";
import FilterIcon from "@/src/assets/images/filter.png";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./Card";
import SearchInput from "./SearchInput";
import { useGetProductsQuery } from "../store/api";

export interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export default function Home() {
  const category = [
    "Men's clothing",
    "Jewelery",
    "Electronics",
    "Women's clothing",
  ];
  const { isLoading, data, error } = useGetProductsQuery();
  if(!data) return <ActivityIndicator
          size={36}
          color={"black"}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Discover</Text>
        <Image
          source={BellIcon}
          alt="bell-icon"
          style={{ height: 24, width: 24 }}
        />
      </View>
      {/* search with filter  */}
      <View style={styles.searchFilterContainer}>
        <SearchInput />
        <TouchableOpacity style={styles.filterIcon}>
          <Image
            source={FilterIcon}
            alt="filter-icon"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      {/* filter buttons  */}

      <FlatList
        horizontal
        style={styles.filterBtnContainer}
        data={category}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {isLoading ? (
        <ActivityIndicator
          size={36}
          color={"black"}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
      ) : (
        <FlatList<ProductType>
          data={data ?? []}
          renderItem={({ item }) => <Card {...item} />}
          numColumns={2}
          style={styles.cardContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    marginTop: 12,
    color: "#1A1A1A",
    fontWeight: "semibold",
    fontSize: 32,
    fontFamily: "sans",
    letterSpacing: -1,
  },
  searchFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    justifyContent: "space-between",
  },
  filterIcon: {
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 10,
    marginRight: 24,
  },
  filterBtnContainer: {
    marginTop: 16,
    height: 52,
    marginLeft: -10,
    marginBottom: 10,
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
  },
  cardContainer: {
    marginBottom: -30,
  },
});
