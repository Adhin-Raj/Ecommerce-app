import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

interface IconSvg {
  customStyle: Object;
}

export default function IconSvg({ customStyle }: IconSvg) {
  return (
    <Svg
      width="134"
      height="133"
      viewBox="0 0 134 133"
      fill="none"
      style={[customStyle]}
    >
      <Path
        d="M134 44.8561H88.5976V0H45.0871C45.0871 24.7807 24.9082 44.8561 0 44.8561V88.1439H45.0871V133H88.5976C88.5976 108.219 109.092 88.1439 134 88.1439V44.8561Z"
        fill="white"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
