import React from "react";
import { Dimensions } from "react-native";
import { View } from "../base";

const LayoutContainer = ({ children }) => {
  const { width } = Dimensions.get("window");
  return (
    <View bg="dark1" flex={1} pt={width * 0.12} px={width * 0.06}>
      {children}
    </View>
  );
};

export default LayoutContainer;
