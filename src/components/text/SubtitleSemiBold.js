import React from "react";
import { Text } from "../base";

const SubtitleSemiBold = ({ children, ...props }) => {
  return (
    <Text fontSize={17} style={{ fontFamily: "InterSemiBold" }} {...props}>
      {children}
    </Text>
  );
};

export default SubtitleSemiBold;
