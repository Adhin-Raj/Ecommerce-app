import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Header from "@/src/components/Header";
import AllUsers from "@/src/components/admin/AllUsers";
import AllProduct from "@/src/components/admin/AllProduct";
import UploadProduct from "@/src/components/admin/UploadProduct";
import { Redirect } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

export default function Admin() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["All Users", "All Products", "Upload"];
  const { user } = useUser();

  if (user?.firstName !== "Admin") {
    return <Redirect href="/(tabs)" />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <AllUsers />;
      case 1:
        return <AllProduct />;
      case 2:
        return <UploadProduct />;
      default:
        return <AllUsers />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Admin Dashboard" />

      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => setActiveTab(index)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.content}>{renderContent()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tabContainer: {
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#E6E6E6",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBlock: 8,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  activeTab: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  tabText: {
    fontFamily: "medium-sans",
    color: "#666",
    fontSize: 13,
  },
  activeTabText: {
    color: "black",
    fontWeight: "600",
  },

  content: {
    flex: 1,
  },
});
