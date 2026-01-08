import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ImageFile{
    uri:string,
    type:string,
    name:string
}

interface ImagePickerComponentProps{
    value:ImageFile[] | null,
    onChange:(images:ImageFile[])=>void,
    formError?: any

}

export default function ImagePickerComponent({onChange,value,formError}:ImagePickerComponentProps) {

const image = value  || []

  const pickImage = async () => {
    if (image.length === 4) {
      return alert("maximum of 4 product images are allowed");
    }
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
        const imageFile:ImageFile= {
            uri:result.assets[0].uri,
            name:`product-${Date.now()}.jpg`,
            type:'image/jpeg'
        }
      const updated = [...image, imageFile];
    onChange(updated)
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={pickImage}
        style={{ flexDirection: "row", gap: 4, justifyContent: "center" }}
      >
        <Ionicons name="cloud-upload-outline" size={24} />
        <Text>Pick product image</Text>
      </TouchableOpacity>
      {image?.length !== 0 && (
        <FlatList
          data={image}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flex: 1,
            marginTop: 10,
          }}
          horizontal
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.image} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#E6E6E6",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 14,
  },
  image: {
    width: 50,
    height: 50,
  },
});
