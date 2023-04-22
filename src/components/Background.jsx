import * as React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { SafeAreaView, View, StatusBar, Image, Dimensions } from "react-native";
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export default function Background() {
  return (
    <SafeAreaView
      className="absolute items-center justify-center"
      style={{
        marginTop: StatusBar.currentHeight,
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <Image
        style={{
          height: windowHeight,
          width: windowWidth,
        }}
        source={require("./../../assets/background.jpg")}
        resizeMode="cover"
      />
      <ExpoStatusbar backgroundColor="#5D5ADD" style="light" />
    </SafeAreaView>
  );
}
