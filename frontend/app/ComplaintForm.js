import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import BottomNav from '../components/BottomNav';

const ComplaintFormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    alert('Complaint submitted successfully!');
  };

  return (
    <View className="flex-1 bg-black">
      <Text className="text-3xl font-bold text-white text-center py-6">Report a Complaint</Text>
      <ScrollView className="bg-white rounded-t-3xl px-6 py-4">
        {[['Full Name', name, setName], ['Email', email, setEmail], ['Issue Title', title, setTitle], ['Description', description, setDescription, true], ['Location', location, setLocation]].map(([label, value, setter, multiline]) => (
          <View key={label} className="mb-4">
            <Text className="text-sm text-gray-700 mb-1">{label}</Text>
            <TextInput
              value={value}
              onChangeText={setter}
              multiline={multiline}
              numberOfLines={multiline ? 4 : 1}
              placeholder={label}
              className="border border-gray-300 rounded-md px-4 py-2"
            />
          </View>
        ))}
        <TouchableOpacity onPress={handleSubmit} className="bg-red-500 py-3 rounded-md">
          <Text className="text-white text-center">Submit Complaint</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav active="ComplaintForm" />
    </View>
  );
};

export default ComplaintFormScreen;
