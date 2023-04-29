import * as React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
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
const windowHeight = Dimensions.get("window").height;

export default function Signup({ navigation }) {
  const [SignikaLoaded] = useFonts({
    Signika_400Regular,
    Signika_700Bold,
    Signika_600SemiBold,
  });
  if (!SignikaLoaded) {
    return null;
  }
  return (
    <>
      <Background />

      <SafeAreaView
        className="absolute items-center justify-center"
        style={{ height: windowHeight, width: windowWidth }}
      >
        <View className=" bg-white w-[80%] h-[550px] rounded-2xl ">
          <Text
            style={{
              fontFamily: "Signika_600SemiBold",
              fontSize: 40,
              marginLeft: "5%",
              marginTop: "2%",
              marginBottom: "5%",
            }}
          >
            Sign Up
          </Text>
          <View className="bg-red-300 w-full h-[74%]">
            <View className="bg-green-300 w-full h-[100%]">
              <KeyboardAwareScrollView
                //extraScrollHeight={10}
                //extraHeight={1130}
                enableOnAndroid={true}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                style={{ height: "70%" }}
              >
                <Textfield
                  textInputName="First Name"
                  placeholder1="Enter your First name"
                  ErrorMessage=""
                />
                <Textfield
                  textInputName="Last Name"
                  placeholder1="Enter your Last name"
                  ErrorMessage=""
                />
                <Textfield
                  textInputName="Birthdate"
                  placeholder1="Enter your Birthdate"
                  ErrorMessage=""
                />
                <Textfield
                  textInputName="Gender"
                  placeholder1="Enter your Gender"
                  ErrorMessage=""
                />
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
              </KeyboardAwareScrollView>
            </View>
          </View>
          <View className="flex flex-row mt-4 self-end mr-4 mb-5">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
              className="w-[115px] bg-black h-[37px] justify-center mx-2 rounded-lg"
            >
              <Text className="text-white font-[450] mx-auto text-[25px]">
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Verification");
              }}
              className="w-[100px] bg-[#5D5ADD] h-[37px] justify-center rounded-lg"
            >
              <Text className="text-white font-[450] mx-auto text-[25px]">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {/* </KeyboardAwareScrollView> */}
      <View
        style={{ position: "absolute", top: windowHeight / 1.22 }}
        className="flex flex-col  w-full"
      >
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
    </>
  );
}
