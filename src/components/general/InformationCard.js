import React, { useState } from "react";
import { PROFILE_DATA } from "../../data/PROFILE_DATA";
import { Text, View } from "../base";

import { Body } from "../text";
import Seperator from "./Seperator";

const InformationCard = ({ icon, item, personal }) => {
  var value = 0;
  return (
    <View bg="dark2" borderRadius="10" p={15} mb={10}>
      {icon}
      <Seperator />
      {personal.map((key) => (
        <Body color="gray" mb={6}>
          {key}: <Body color="white">{item[value]}</Body>
          <Body color="transparent">{value++}</Body>
        </Body>
      ))}
    </View>
  );
};

export default InformationCard;
