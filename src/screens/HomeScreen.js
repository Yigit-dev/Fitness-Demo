import React from "react";
import LayoutContainer from "../components/containers/LayoutContainer";
import Welcome from "../components/general/Welcome";
import WorkoutPlan from "../components/general/WorkoutPlan";

const HomeScreen = ({ navigation }) => {
  return (
    <LayoutContainer>
      <Welcome />
      <WorkoutPlan navigation={navigation} />
    </LayoutContainer>
  );
};

export default HomeScreen;
