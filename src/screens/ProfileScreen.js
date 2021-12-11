import React from "react";
import { View } from "../components/base";
import LayoutContainer from "../components/containers/LayoutContainer";

import Profile from "../components/general/Profile";
import ProfileActions from "../components/general/ProfileActions";

const ProfileScreen = ({ navigation }) => {
  return (
    <LayoutContainer>
      <Profile />
      <ProfileActions navigation={navigation} />
    </LayoutContainer>
  );
};

export default ProfileScreen;
