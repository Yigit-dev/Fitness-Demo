import React from "react";
import { View } from "../base";
import { ArrowRight } from "../icons";
import { Body } from "../text";

const ProfileActionCard = ({ action }) => {
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      borderTopWidth={0.25}
      borderColor="gray"
      py={30}
    >
      <Body color="white">{action}</Body>
      <ArrowRight color="gray" />
    </View>
  );
};

export default ProfileActionCard;
