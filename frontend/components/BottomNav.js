// components/BottomNav.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navItems = [
    { name: 'Home', label: 'Home' },
    { name: 'ComplaintForm', label: 'Complaint' },
    { name: 'Track', label: 'Track' },
    { name: 'Profile', label: 'Profile' },
  ];

  return (
    <View className="flex-row justify-around items-center py-3 bg-black">
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.name}
          onPress={() => navigation.navigate(item.name)}
          className="items-center"
        >
          <Text className={`text-xs ${route.name === item.name ? 'text-white' : 'text-gray-400'}`}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
