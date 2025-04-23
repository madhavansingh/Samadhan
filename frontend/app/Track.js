import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import BottomNav from '../components/BottomNav';

const TrackScreen = () => {
  const complaints = [
    { id: 'CMP001', title: 'Water Leakage in Street', status: 'Pending', submittedOn: '20 April 2025' },
    { id: 'CMP002', title: 'Garbage not collected', status: 'In Progress', submittedOn: '21 April 2025' },
    { id: 'CMP003', title: 'Streetlight not working', status: 'Resolved', submittedOn: '19 April 2025' },
    { id: 'CMP004', title: 'Potholes on Main Road', status: 'Pending', submittedOn: '22 April 2025' }
  ];

  const statusColor = {
    Pending: 'text-yellow-700 bg-yellow-100',
    'In Progress': 'text-blue-700 bg-blue-100',
    Resolved: 'text-green-700 bg-green-100'
  };

  return (
    <View className="flex-1 bg-black">
      <Text className="text-3xl font-bold text-white text-center py-6">Complaint Tracking</Text>
      <ScrollView className="bg-white rounded-t-3xl px-6 py-4">
        {complaints.map(item => (
          <View key={item.id} className="border rounded-lg p-4 mb-4">
            <View className="flex-row justify-between mb-1">
              <Text className="font-semibold text-lg">{item.title}</Text>
              <Text className={`px-3 py-1 text-sm rounded-full font-medium ${statusColor[item.status]}`}>
                {item.status}
              </Text>
            </View>
            <Text className="text-sm text-gray-500">Complaint ID: {item.id}</Text>
            <Text className="text-sm text-gray-500">Submitted On: {item.submittedOn}</Text>
          </View>
        ))}
      </ScrollView>
      <BottomNav active="Track" />
    </View>
  );
};

export default TrackScreen;
