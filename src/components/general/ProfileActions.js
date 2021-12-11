import React from "react";
import { ScrollView } from "react-native";
import { View } from "../base";
import { Subtitle } from "../text";
import ProfileActionCard from "./ProfileActionCard";
import UpgradePremium from "./UpgradePremium";

const ProfileActions = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProfileActionCard action="Profile Detail" navigation={navigation} />
      <ProfileActionCard action="Privacy Policy" />
      <ProfileActionCard action="Settings" />
      <UpgradePremium />
      <View py={40}>
        <Subtitle color="red">Sign Out</Subtitle>
      </View>
    </ScrollView>
  );
};

export default ProfileActions;
