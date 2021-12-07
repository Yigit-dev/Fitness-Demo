import React from "react";
import { Button } from "../base";

const CategoriesButton = ({ children, ...props }) => {
  return (
    <Button py="2%" px="5%" borderRadius={16} {...props}>
      {children}
    </Button>
  );
};

export default CategoriesButton;
