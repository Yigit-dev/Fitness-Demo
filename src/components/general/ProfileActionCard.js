import React from "react";
import { PROFILE_DATA } from "../../data/PROFILE_DATA";
import { Button, View } from "../base";
import { ArrowRight } from "../icons";
import { Body } from "../text";

const ProfileActionCard = ({ action, navigation }) => {
  return (
    <Button
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      borderTopWidth={0.25}
      borderColor="gray"
      py={30}
      onPress={
        action === "Profile Detail"
          ? () => navigation.navigate("ProfileDetail")
          : null
      }
    >
      <Body color="white">{action}</Body>
      <ArrowRight color="gray" />
    </Button>
  );
};

export default ProfileActionCard;
