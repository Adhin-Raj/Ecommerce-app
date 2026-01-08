import { ProductUploadSchema } from "@/src/schemas/productUpload/productUpload";
import { ProductType } from "@/src/schemas/productUpload/productUpload.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import CustomButton from "../CustomButton";
import { CustomDropDown } from "../CustomDropDown";
import CustomInput from "../CustomInput";
import ImagePickerComponent from "../ImagePicker";

export default function UploadProduct() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(ProductUploadSchema),
    defaultValues: {
      brandName: "",
      category: "Camera",
      description: "",
      price: "",
      productImage: [],
      productName: "",
      sellingPrice: "",
    },
  });

  const onsubmit = (data: ProductType) => {
    console.log("data", data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 200}
      style={styles.container}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>UploadProduct</Text>
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Product Name"
              placeholderText="Enter  Product Name"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              formError={errors.productName}
            />
          )}
          name="productName"
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Brand Name"
              placeholderText="Enter Brand Name"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              formError={errors.brandName}
            />
          )}
          name="brandName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomDropDown
              value={value}
              onChange={onChange}
              formError={errors.category}
            />
          )}
          name="category"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <ImagePickerComponent
              value={value}
              onChange={onChange}
              formError={errors.productImage}
            />
          )}
          name="productImage"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Price"
              placeholderText="Enter Product Price"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              formError={errors.price}
            />
          )}
          name="price"
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Selling Price"
              placeholderText="Enter selling price"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              formError={errors.sellingPrice}
            />
          )}
          name="sellingPrice"
        />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Description"
              placeholderText="Enter product description"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              formError={errors.description}
            />
          )}
          name="description"
        />
        <CustomButton btnLabel="Upload" handlePress={handleSubmit(onsubmit)} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "sans",
    marginTop: 10,
  },
});
