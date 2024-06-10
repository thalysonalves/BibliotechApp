import React from "react";
import { View, Text, Image } from "react-native"

interface CardProps {
  title: string;
  description: string;
  imageUrl: string | undefined;
}

export const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <View className="bg-white p-4 m-7 ml-1 rounded-lg shadow-md">
      {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 100, height: 150, marginBottom: 10 }} />}
      <Text className="text-xl text-black uppercase font-bold mb-2">{title}</Text>
      <Text className="text-gray-600">{description}</Text>
    </View>
  );
}