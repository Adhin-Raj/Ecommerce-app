import Header from "@/src/components/Header";
import NoResult from "@/src/components/NoResult";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
