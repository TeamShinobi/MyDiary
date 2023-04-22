import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Background from "../components/Background";
import Textfield from "../components/Textfield";
import {
  useFonts,
  Signika_400Regular,
  Signika_700Bold,
  Signika_600SemiBold,
} from "@expo-google-fonts/signika";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export default function Login({ navigation }) {
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
        <Text
          style={{
            fontFamily: "Signika_600SemiBold",
            fontSize: 40,
            marginLeft: "5%",
            marginTop: "2%",
            marginBottom: "5%",
          }}
        >
          Login
        </Text>
        <View className="0 w-[90%] mx-auto">
          <Textfield
            textInputName="Email"
            placeholder1="Enter your email"
            ErrorMessage=""
          />
          <Textfield
            textInputName="Password"
            placeholder1="Enter your password"
            ErrorMessage=""
            ifPassword={true}
          />
        </View>
        <View className=" flex flex-row justify-center mt-2 mb-2">
          <Text className="text-[16px]">Forgot password?</Text>
          <TouchableOpacity>
            <Text className="text-[16px] text-[#397ce1]"> Click here</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row mt-4 self-end mr-4 mb-5">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
            className="w-[115px] bg-black h-[37px] justify-center mx-2 rounded-lg"
          >
            <Text className="text-white font-[450] mx-auto text-[25px]">
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[85px] bg-[#5D5ADD] h-[37px] justify-center rounded-lg">
            <Text className="text-white font-[450] mx-auto text-[25px]">
              Login
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
