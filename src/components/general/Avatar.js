import React from "react";
import { Image, ImageBackground } from "react-native";
import { View } from "../base";
import { Title, TitleSemiBold } from "../text";

const Avatar = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/circle.png")}
        style={{
          width: 160,
          height: 160,
          padding: 5,
          marginBottom: 20,
        }}
        imageStyle={{ borderRadius: 160 }}
      >
        <Image
          source={require("../../../assets/avatar.jpg")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
          }}
        />
      </ImageBackground>
      <TitleSemiBold color="white">Julia</TitleSemiBold>
      <Title color="gray">Doe</Title>
    </View>
  );
};

export default Avatar;
