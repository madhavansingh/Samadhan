import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text.replace(/[^0-9]/g, "");
    setCode(newCode);
  };

  const handleSubmit = () => {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      alert(`Verifying code: ${fullCode}`);
      navigation.navigate("Home");
    } else {
      alert("Please enter full 6-digit code.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
      <Text className="text-2xl font-semibold mb-4">Verification Code</Text>
      <Text className="text-center text-gray-500 mb-6">
        Enter the 6-digit code sent to your phone number
      </Text>

      <View className="flex-row gap-2 mb-6">
        {code.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            className="w-10 h-10 text-center border border-gray-300 rounded-md text-lg"
          />
        ))}
      </View>

      <Text className="text-sm text-gray-500 mb-4">
        Didn’t receive code? <Text className="text-red-500 underline">Resend</Text>
      </Text>

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-red-500 py-3 px-6 rounded-lg w-full"
      >
        <Text className="text-white text-center font-medium">Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;
