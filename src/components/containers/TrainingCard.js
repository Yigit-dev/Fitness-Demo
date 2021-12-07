import React from "react";
import { Dimensions, Image } from "react-native";
import { View } from "../base";
import { ArrowDown } from "../icons";
import Footnote from "../text/Footnote";
import Subtitle from "../text/Subtitle";

const TrainingCard = ({ item }) => {
  const { width } = Dimensions.get("window");
  return (
    <View
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb={20}
      borderRadius="normal"
      bg="dark2"
      pr={width * 0.06}
    >
      <Image
        source={item.background}
        style={{
          width: width * 0.25,
          height: width * 0.23,
          borderRadius: 16,
        }}
        resizeMode="cover"
      />
      <View width={width * 0.37}>
        <Subtitle color="white" mb={5}>
          {item.plan}
        </Subtitle>
        <Footnote color="sahra">{item.time}</Footnote>
      </View>
      <ArrowDown color="gray" />
    </View>
  );
};

export default TrainingCard;
