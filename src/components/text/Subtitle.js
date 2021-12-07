import React from "react";
import { Text } from "../base";

const Subtitle = ({ children, ...props }) => {
  return (
    <Text fontSize={17} style={{ fontFamily: "InterMedium" }} {...props}>
      {children}
    </Text>
  );
};

export default Subtitle;
