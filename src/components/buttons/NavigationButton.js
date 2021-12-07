import React from "react";
import { Button } from "../base";

const NavigationButton = ({ children, onPress, ...props }) => {
  return (
    <Button borderRadius="normal" p={10} onPress={onPress} {...props}>
      {children}
    </Button>
  );
};

export default NavigationButton;
