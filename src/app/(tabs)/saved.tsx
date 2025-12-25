import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Header from "@/src/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/src/components/Card";
import NoResult from "@/src/components/NoResult";

export default function Saved() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <Header title="Saved" />
      {/* <FlatList
              data={Array.from({ length: 3 })}
              renderItem={({ index }) => <Card isWishlist={true} />}
              numColumns={2}
              style={styles.cardContainer}
              showsVerticalScrollIndicator={false}
            /> */}
      <NoResult
        description="You don't have any saved items.Go to home and add some."
        iconName="heart-outline"
        text="No Saved Items!"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 26,
  },
});
