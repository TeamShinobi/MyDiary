import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  AnimationWrapper,
} from "react-native";
import Background from "../components/Background";
import LottieView from "lottie-react-native";
import {
  useFonts,
  Signika_400Regular,
  Signika_700Bold,
  Signika_600SemiBold,
} from "@expo-google-fonts/signika";
import { styled } from "nativewind";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export default function Verification({ navigation }) {
  const [SignikaLoaded] = useFonts({
    Signika_400Regular,
    Signika_700Bold,
    Signika_600SemiBold,
  });
  if (!SignikaLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        position: "absolute",
        alignContent: "center",
        justifyContent: "center",
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <Background />

      <View className=" absolute bg-white w-[80%] self-center rounded-2xl">
        <View className="h-[100px] w-[100px] mx-auto mt-5">
          <LottieView
            style={{ backgroundColor: "yello" }}
            key="animation"
            autoPlay
            loop={false}
            resizeMode="cover"
            source={require("../../assets/verified-check.json")}
          />
        </View>
        <Text
          style={{
            fontFamily: "Signika_600SemiBold",
            fontSize: 30,
            textAlign: "center",
            marginTop: "2%",
            marginBottom: "5%",
          }}
        >
          You are now Verified
        </Text>
        <View className="0 w-[90%] mx-auto"></View>

        <Text className="text-[16px] text-center mt-2 mb-2 pl-5 pr-5 mx-auto">
          Your account is now activated and you can start creating your diary.
        </Text>

        <View className="flex flex-row mt-4  mx-auto mb-5">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            className="w-[130px] bg-black h-[37px] justify-center mx-2 rounded-lg"
          >
            <Text className="text-white font-[450] mx-auto text-[25px]">
              Complete
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ top: windowHeight / 2.7 }} className="flex flex-col">
        <Text
          style={{ fontFamily: "Signika_700Bold" }}
          className="self-center text-[40px] text-white "
        >
          MyDiary
        </Text>
        <View className=" flex flex-row justify-center mt-2">
          <TouchableOpacity>
            <Text className="self-center text-md text-white">Policy </Text>
          </TouchableOpacity>
          <Text className="text-white"> | </Text>
          <TouchableOpacity>
            <Text className="self-center text-md text-white"> Privacy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
