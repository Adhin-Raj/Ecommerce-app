import {  StyleSheet} from "react-native";
import React from "react";
import SearchInput from "@/src/components/SearchInput";
import { SafeAreaView } from "react-native-safe-area-context";
import RecentSearch from "@/src/components/RecentSearch";
import NoResult from "@/src/components/NoResult";
import Header from "@/src/components/Header";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search"/>
      <SearchInput customStyle={{ width: "100%", marginTop: 20 }} />
      {/* <RecentSearch /> */}
      <NoResult description="Try a similar word or something more general." iconName="search" text="No Result Found!"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
