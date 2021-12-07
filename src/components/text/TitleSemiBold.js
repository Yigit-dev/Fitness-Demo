import React from "react";
import { Text } from "../base/index";

const TitleSemiBold = ({ children, ...props }) => {
  return (
    <Text fontSize={36} style={{ fontFamily: "InterSemiBold" }} {...props}>
      {children}
    </Text>
  );
};

export default TitleSemiBold;
