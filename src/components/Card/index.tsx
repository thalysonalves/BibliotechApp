import React from "react";
import { View, Text, Image, ScrollView } from "react-native"

interface CardProps {
  title: string;
  description: string;
  imageUrl: string | undefined;
}

export const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <ScrollView className="bg-tgreen p-3 m-3 rounded-lg shadow-md">
      {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 100, height: 150, marginBottom: 10 }} />}
      <Text className="text-xl text-white text-center uppercase font-bold mb-2">{title}</Text>
      <Text className="text-white">{description}</Text>
    </ScrollView>
  );
}