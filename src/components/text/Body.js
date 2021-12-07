import React from "react";
import { Text } from "../base/index";

const Body = ({ children, ...props }) => {
  return (
    <Text fontSize={15} style={{ fontFamily: "InterRegular" }} {...props}>
      {children}
    </Text>
  );
};

export default Body;
