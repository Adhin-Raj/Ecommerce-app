import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/src/service/axios";
import { useAuth } from "@clerk/clerk-expo";

export type UserType ={
  clerkId:string,
  firstName:string,
  lastName:string,
  _id:string
}

export default function AllUsers() {
  const [users,setUsers] = useState([])
  const { getToken } = useAuth();

  const fetchAllUsers = async () => {
    try {
      
      const token = await getToken();
      if (!token) {
      throw new Error("Failed to retrieve auth token");
    }
      const res = await axiosInstance.get("/api/admin/getAllUsers", {
        headers: {
            Authorization:`Bearer ${token}`
        },
      });
      console.log(res.data?.users)
      setUsers(res.data?.users)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList<UserType>
       data={users} renderItem={({item})=>{
       return (
        <View>
          <Text style={{color:'black'}}>{item.firstName}</Text>
          <Text>{item.lastName}</Text>
          <Text>{item.clerkId}</Text>
          </View>
      )
      }}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
