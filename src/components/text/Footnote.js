import React from "react";
import { Text } from "../base";

const Footnote = ({ children, ...props }) => {
  return (
    <Text fontSize={13} style={{ fontFamily: "InterRegular" }} {...props}>
      {children}
    </Text>
  );
};

export default Footnote;
