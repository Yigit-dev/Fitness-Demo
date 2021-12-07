import React from "react";
import { ScrollView } from "react-native";
import { View } from "../base";

const DetailContainer = ({ children, ...props }) => {
  return (
    <View
      as={ScrollView}
      borderTopLeftRadius="full"
      borderTopRightRadius="full"
      bg="dark1"
      flex={1}
      mt={-30}
      py={40}
      px={30}
      {...props}
    >
      {children}
    </View>
  );
};

export default DetailContainer;
