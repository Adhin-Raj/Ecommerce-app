import SearchIcon from "@/src/assets/images/search.png";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface SearchInputProps {
  handleSearch?: () => void;
  customStyle?: Object;
}

export default function SearchInput({
  handleSearch,
  customStyle,
}: SearchInputProps) {
  return (
    <View style={[{ width: "84%" }, customStyle]}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for products..."
      />
      <Image source={SearchIcon} alt="search-icon" style={styles.searchIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
