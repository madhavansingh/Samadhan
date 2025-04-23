import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import BottomNav from '../components/BottomNav';


const HomeScreen = () => {
  const feedData = [
    { id: 1, userName: 'Kantik', location: 'Sonagiri, Bhopal', timeAgo: '2 mins ago', text: 'The cafeteria food is often cold...' },
    { id: 2, userName: 'Pravenn', location: 'Kalpana Nagar, Bhopal', timeAgo: '5 mins ago', text: 'Another post description here.' }
  ];

  return (
    <View className="flex-1 bg-black">
      <Text className="text-3xl font-bold text-white text-center py-6">Explore Feeds</Text>
      <ScrollView className="bg-white rounded-t-3xl px-4 py-4">
        {feedData.map((item) => (
          <View key={item.id} className="mb-6 border-b border-gray-200 pb-4">
            <View className="flex-row items-center mb-2">
              <View className="w-10 h-10 bg-gray-300 rounded-lg mr-2" />
              <View>
                <Text className="font-semibold text-base">{item.userName}</Text>
                <Text className="text-sm text-gray-500">{item.location}</Text>
              </View>
              <Text className="ml-auto text-xs text-gray-400">{item.timeAgo}</Text>
            </View>
            <Text className="text-sm text-gray-800">{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <BottomNav active="Home" />
    </View>
  );
};

export default HomeScreen;
