import React from "react";
import { Dimensions, ImageBackground, StatusBar } from "react-native";
import { View } from "../components/base";
import { Subtitle, Body } from "../components/text/index";
import DetailContainer from "../components/containers/DetailContainer";
import {
  CircleBack,
  Profile,
  Education,
  Note,
  Strategy,
  Dumbbell,
  ProfileCard,
} from "../components/icons";
import theme from "../constants/theme";
import { PROFILE_DATA } from "../data/PROFILE_DATA";
import { Video } from "expo-av";
import Seperator from "../components/general/Seperator";
import InformationCard from "../components/general/InformationCard";

const ProfileDetailScreen = () => {
  const item = PROFILE_DATA;
  const { width } = Dimensions.get("window");
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
        <Video
          ref={video}
          style={{
            width: "100%",
            height: width / 2,
            borderRadius: 10,
            marginBottom: 20,
          }}
          source={item.video}
          useNativeControls
          resizeMode="cover"
          isLooping
          shouldPlay
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <Subtitle color="sahra">Information</Subtitle>
        <Seperator />
        <InformationCard
          icon={<ProfileCard color="gray" />}
          item={[item.name, item.surname, item.age]}
          personal={["Name", "Surname", "Age"]}
        />
        <InformationCard
          icon={<Education color="gray" />}
          item={[
            item.school.highschool,
            item.school.university,
            item.school.graduation,
          ]}
          personal={["High School", "University", "Graduation"]}
        />
        <InformationCard
          icon={<Dumbbell color="gray" />}
          item={[item.height, item.weight, item.branch, item.position]}
          personal={["Height", "Weight", "Branch", "Position"]}
        />
        <InformationCard
          icon={<Strategy color="gray" />}
          item={[item.coach.name, item.coach.surname, item.coach.mail]}
          personal={["Name", "Surname", "Mail"]}
        />
        <InformationCard
          icon={<Note color="gray" />}
          item={[item.note]}
          personal={["Note"]}
        />
      </DetailContainer>
    </View>
  );
};

export default ProfileDetailScreen;
