import React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { Button, View } from "../base";
import Footnote from "../text/Footnote";
import SubtitleSemiBold from "../text/SubtitleSemiBold";

const Slider = ({ navigation, data }) => {
  const { width } = Dimensions.get("window");
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 35 }}
      snapToOffsets={[...Array(data.length)].map(
        (x, i) => i * (width * 0.88) + (i - 1) * 40
      )}
      horizontal
      snapToAlignment={"start"}
      scrollEventThrottle={16}
      decelerationRate="fast"
      renderItem={({ item }) => (
        <Button onPress={() => navigation.navigate("Detail", item)}>
          <ImageBackground
            source={item.background}
            imageStyle={{
              borderRadius: 12,
              opacity: 0.7,
            }}
            style={{
              backgroundColor: "black",
              height: width / 2.03,
              width: width * 0.88,
              borderRadius: 12,
              position: "relative",
            }}
            resizeMode="cover"
          >
            <View position="absolute" pt={width / 2.03 - 55} pl={16}>
              <SubtitleSemiBold color="white" mb={6}>
                {item.plan}
              </SubtitleSemiBold>
              <View flexDirection="row" alignItems="center">
                <View backgroundColor="sahra" width={2} height={10} mr={6} />
                <Footnote color="gray">{item.hours}</Footnote>
              </View>
            </View>
          </ImageBackground>
        </Button>
      )}
    />
  );
};

export default Slider;
