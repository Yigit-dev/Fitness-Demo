import React from "react";
import { View } from "../base";

const NavigationContainer = ({ children }) => {
  return (
    <View
      bg="sahra"
      width="100%"
      height="100%"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {children}
    </View>
  );
};

export default NavigationContainer;
