import React from "react";
import { View } from "../base";

import Body from "../text/Body";
import Title from "../text/Title";
import TitleSemiBold from "../text/TitleSemiBold";

const Welcome = () => {
  return (
    <View pb={37}>
      <View flexDirection="row" mb={15}>
        <Title color="white" mr={12}>
          Hello
        </Title>
        <TitleSemiBold color="white">Julia,</TitleSemiBold>
      </View>
      <Body color="gray">Good morning</Body>
    </View>
  );
};

export default Welcome;
