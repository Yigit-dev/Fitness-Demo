import React from "react";
import { View } from "../base";
import { ArrowRight } from "../icons";
import { Footnote, Subtitle, SubtitleSemiBold } from "../text";

const UpgradePremium = () => {
  return (
    <View bg="dark2" borderRadius="normal" px={12} py={15}>
      <View
        bg="orange"
        width={50}
        borderRadius="normal"
        alignItems="center"
        mb={8}
      >
        <Subtitle color="white">PRO</Subtitle>
      </View>
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <View>
          <SubtitleSemiBold color="white">Upgrade to Premium</SubtitleSemiBold>
          <Footnote color="gray">This subscription is auto-renewable</Footnote>
        </View>
        <View mr={10}>
          <ArrowRight color="white" />
        </View>
      </View>
    </View>
  );
};

export default UpgradePremium;
