import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

type CurveLineSvgType = {
  top: number;
  width: number;
  height: number;
};

export default function CurveLineSvg({ top, width, height }: CurveLineSvgType) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={[styles.svg, { top: top }]}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M369.87 797.313C440.584 750.955 427.814 645.017 461.01 567.25C493.445 491.269 581.563 427.75 561.875 347.516C542.137 267.079 431.185 255.112 370.569 198.674C308.296 140.693 284.58 40.051 203.601 13.9335C118.098 -13.6431 13.419 3.19387 -54.9994 61.4185C-120.951 117.544 -100.356 222.521 -134.849 301.957C-168.831 380.215 -262.822 436.141 -254.59 521.061C-246.293 606.657 -164.801 665.575 -94.7619 715.476C-31.0007 760.904 44.9901 775.855 122.092 789.435C205.515 804.129 299.028 843.755 369.87 797.313Z"
        stroke="#333333"
        stroke-width="2"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  svg: {
    position: "absolute",
    left: -10,
    zIndex: 10,
  },
});
