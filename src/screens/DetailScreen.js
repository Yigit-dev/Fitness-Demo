import React from "react";
import { View } from "../components/base/index";
import { Dimensions, ImageBackground, StatusBar } from "react-native";
import { CircleBack, Flame, Play } from "../components/icons/index";
import theme from "../constants/theme";
import DetailContainer from "../components/containers/DetailContainer";
import TitleSemiBold from "../components/text/TitleSemiBold";
import Footnote from "../components/text/Footnote";
import CategoriesButton from "../components/buttons/CategoriesButton";
import Body from "../components/text/Body";
import TrainingCard from "../components/containers/TrainingCard";
import { TRAINING_DATA } from "../data/TRAINING";

const DetailScreen = ({ route }) => {
  const item = route.params;
  const { width } = Dimensions.get("window");
  return (
    <View flex={1} bg="dark1">
      <StatusBar hidden={true} />
      <ImageBackground
        source={item.background}
        style={{
          height: width / 1.33,
        }}
        resizeMode="cover"
      >
        <View pt={width * 0.07} pl={width * 0.05}>
          <CircleBack color={theme.colors.dark2} opacity={0.6} />
        </View>
      </ImageBackground>
      <DetailContainer>
        {/* Title */}
        <TitleSemiBold fontSize={24} color="white" mb={15}>
          {item.plan}
        </TitleSemiBold>
        <Footnote color="sahra" mb={20}>
          {item.hours}
        </Footnote>

        {/* Buttons */}
        <View flexDirection="row" alignItems="center" pb={40}>
          <CategoriesButton bg="dark2" mr={10}>
            <Play color="white" width={20} height={20} />
            <Body color="white" ml={10}>
              {item.time}
            </Body>
          </CategoriesButton>
          <CategoriesButton bg="dark2">
            <Flame color="white" width={20} height={20} />
            <Body color="white" ml={10}>
              {item.cal}
            </Body>
          </CategoriesButton>
        </View>

        {/* DESCRIPTION */}
        <View pb={40}>
          <Body color="gray">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            culpa necessitatibus animi, laudantium accusantium nam, earum
            aspernatur voluptate repudiandae sequi, perspiciatis eos pariatur
            aliquam error! Est illo aliquid cupiditate velit!
          </Body>
        </View>

        {/* Training Cards */}
        {TRAINING_DATA.map((item) => (
          <TrainingCard key={item.id} item={item} />
        ))}
        <View pt={70} />
      </DetailContainer>
    </View>
  );
};

export default DetailScreen;
