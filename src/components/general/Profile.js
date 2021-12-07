import React from "react";
import { View } from "../base";
import { Body, Footnote } from "../text";
import Avatar from "./Avatar";

const Profile = () => {
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      pb={25}
    >
      <Avatar />
      <View pr={20}>
        <Footnote color="gray">Joined</Footnote>
        <Body color="white">2 mon ago</Body>
      </View>
    </View>
  );
};

export default Profile;
