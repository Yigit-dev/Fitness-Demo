import React from "react";
import { Text } from "../base/index";

const Title = ({ children, ...props }) => {
  return (
    <Text fontSize={36} style={{ fontFamily: "InterLight" }} {...props}>
      {children}
    </Text>
  );
};

export default Title;
