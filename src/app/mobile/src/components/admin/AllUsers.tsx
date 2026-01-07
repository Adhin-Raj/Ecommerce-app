import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/src/service/axios";
import { useAuth } from "@clerk/clerk-expo";

export type UserType = {
  clerkId: string;
  firstName: string;
  lastName: string;
  _id: string;
  emailAddress: string;
};

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const { getToken } = useAuth();

  const fetchAllUsers = async () => {
    try {
      const token = await getToken();
      if (!token) {
        throw new Error("Failed to retrieve auth token");
      }
      const res = await axiosInstance.get("/api/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filtered = res.data?.users.filter(
        (user: any) => user.firstName !== "Admin"
      );
      setUsers(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <View style={styles.tableContainer}>
      <View style={[styles.row, styles.header]}>
        <Text style={styles.cell}>Name</Text>
        <Text style={styles.cell}>EmailAddress</Text>
      </View>
      <FlatList<UserType>
        data={users}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.cell}>
                {item.firstName + " " + item.lastName}
              </Text>
              <Text style={styles.cell}>{item.emailAddress}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: { flex: 1, marginTop: 10 },
  row: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderBottomWidth:1,
    paddingVertical: 10,
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "#f1f1f1",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});
