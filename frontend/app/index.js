import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1158795969/photo/laptop-tablet-and-phone-set-mockup-isolated-on-white-3d-render.jpg' }}
        className="w-44 h-32"
      />
      <Text className="text-2xl font-bold text-gray-800 mt-6">Stay Engaged</Text>
      <Text className="text-center text-gray-500 mt-2">
        The best way to get the most out of our app is to participate actively.
      </Text>

      <View className="w-full mt-6">
        <Text className="text-gray-700 mb-2">Phone Number</Text>
        <View className="flex-row border border-gray-300 rounded-lg overflow-hidden">
          <Text className="px-4 py-3 text-gray-700 border-r border-gray-300">+91</Text>
          <TextInput
            keyboardType="numeric"
            maxLength={10}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            className="flex-1 px-4 py-3"
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Verification')}
        className="mt-6 bg-red-500 py-3 px-6 rounded-lg w-full"
      >
        <Text className="text-white text-center font-medium">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
