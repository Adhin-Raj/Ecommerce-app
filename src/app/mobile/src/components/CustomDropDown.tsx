import { useState } from "react";
import { Categories } from "../constants";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet, Text, View } from "react-native";
import { FieldError } from "react-hook-form";

interface CustomDropDownProps {
  value: string;
  onChange: (value: string) => void;
  formError?: FieldError;
}


export const CustomDropDown = ({onChange,value,formError}:CustomDropDownProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const CategoryOptions = Categories.map((item) => ({
    label: item,
    value: item,
  }));
  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={CategoryOptions}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select a category" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    marginBottom: 14,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#EEE",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
