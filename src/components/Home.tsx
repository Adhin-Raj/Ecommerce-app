import BellIcon from "@/src/assets/images/bell.png";
import FilterIcon from "@/src/assets/images/filter.png";
import SearchIcon from "@/src/assets/images/search.png";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./Card";

export default function Home() {
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
        <View style={{ width: "84%" }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for clothes..."
          />
          <Image
            source={SearchIcon}
            alt="search-icon"
            style={styles.searchIcon}
          />
        </View>
        <TouchableOpacity style={styles.filterIcon}>
          <Image
            source={FilterIcon}
            alt="filter-icon"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      {/* filter buttons  */}
      <View style={styles.filterBtnContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, { backgroundColor: "#111" }]}
        >
          <Text style={[styles.filterText, { color: "white" }]}>TShirts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Jeans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Shoes</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Array.from({ length: 6 })}
        renderItem={({ index }) => <Card />}
        numColumns={2}
        style={styles.cardContainer}
        showsVerticalScrollIndicator={false}
      />
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
  searchInput: {
    borderColor: "#111",
    borderWidth: 1,
    width: "98%",
    borderRadius: 10,
    position: "relative",
    paddingLeft: 42,
    fontFamily: "medium-sans",
    letterSpacing: -1,
    height: 46,
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    left: 12,
    width: 24,
    height: 24,
  },
  filterIcon: {
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 10,
    marginRight: 24,
  },
  filterBtnContainer: {
    marginTop: 16,
    flexDirection: "row",
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: "#E6E6E6",
    borderWidth: 1,
    borderRadius: 10,
  },
  filterText: {
    fontFamily: "medium-sans",
  },
  cardContainer: {
    marginTop: 26,
  },
});
