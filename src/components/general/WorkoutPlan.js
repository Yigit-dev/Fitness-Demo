import React from "react";
import { ScrollView } from "react-native";
import { SLIDER_DATA } from "../../data/SLIDER";
import { SLIDER2_DATA } from "../../data/SLIDER2";
import { View } from "../base";
import Footnote from "../text/Footnote";
import Subtitle from "../text/Subtitle";
import Slider from "./Slider";
import WorkoutCategories from "./WorkoutCategories";

const WorkoutPlan = ({ navigation }) => {
  return (
    <ScrollView
      style={{ borderRadius: 12 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        pb={15}
      >
        <Subtitle color="white">Today Workout Plan</Subtitle>
        <Footnote color="sahra">Mon 1 Dec</Footnote>
      </View>
      <Slider navigation={navigation} data={SLIDER_DATA} />
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        pb={15}
      >
        <Subtitle color="white">Workout Categories</Subtitle>
        <Footnote color="sahra">See All</Footnote>
      </View>
      <WorkoutCategories />
      <Slider navigation={navigation} data={SLIDER2_DATA} />
    </ScrollView>
  );
};

export default WorkoutPlan;
