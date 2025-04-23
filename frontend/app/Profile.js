import React from 'react';
import { View, Text, Image } from 'react-native';
import BottomNav from '../components/BottomNav';

const ProfileScreen = () => {
  const user = {
    name: 'Praveen',
    email: 'hp15spraveen@gmail.com',
    createdAt: '22 April 2025 at 13:31:46 UTC+5:30',
    location: { lat: 12.9716, lng: 77.5946 },
    profileUrl: 'https://images.pexels.com/photos/110686/pexels-photo-110686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'citizen',
    badges: ['Verified User', 'Top Contributor', 'Early Adopter'],
  };

  return (
    <View className="flex-1 bg-black">
      <View className="items-center p-6">
        <Image source={{ uri: user.profileUrl }} className="w-32 h-32 rounded-full border-4 border-white" />
        <Text className="text-2xl text-white mt-4 font-semibold">{user.name}</Text>
        <Text className="text-gray-400 capitalize">{user.role}</Text>
      </View>
      <View className="bg-white rounded-t-3xl px-6 py-4 flex-1">
        <Text className="text-sm text-gray-600 font-medium">Email:</Text>
        <Text className="text-gray-800 mb-4">{user.email}</Text>
        <Text className="text-sm text-gray-600 font-medium">Created At:</Text>
        <Text className="text-gray-800 mb-4">{user.createdAt}</Text>
        <Text className="text-sm text-gray-600 font-medium">Location:</Text>
        <Text className="text-gray-800 mb-4">Lat: {user.location.lat}, Lng: {user.location.lng}</Text>
        <View className="flex-row flex-wrap gap-2 mt-6">
          {user.badges.map((badge, i) => (
            <Text key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{badge}</Text>
          ))}
        </View>
      </View>
      <BottomNav active="Profile" />
    </View>
  );
};

export default ProfileScreen;
