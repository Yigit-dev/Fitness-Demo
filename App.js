import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/constants/theme";
import Navigation from "./src/navigation/Navigation";
import { useFonts } from "@use-expo/font";
import { StatusBar } from "react-native";

export default function App() {
  const [isLoaded] = useFonts(theme.fonts);
  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </ThemeProvider>
    );
  }
}
