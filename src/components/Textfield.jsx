import * as React from "react-native";
import { View, Text, TextInput } from "react-native";

export default function Textfield(props) {
  return (
    <View className="flex flex-col">
      <Text className="text-[16px] font-medium">{props.textInputName}</Text>
      <TextInput
        className="bg-[#f9f9f9] py-1 pl-2 pr-2 w-full mx-auto rounded-md mb-1 border border-[#d9d9d9] focus:border focus:border-[#397ce1]"
        placeholder={props.placeholder1}
        secureTextEntry={props.ifPassword}
      />
      <Text className="text-[16px]">{props.ErrorMessage}</Text>
    </View>
  );
}
