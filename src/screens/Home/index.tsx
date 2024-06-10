import React, { useState } from "react";
import { View, Text, Image, TextInput, StatusBar, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/routes';


type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;


export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View
      className="flex-1 bg-dark"
    >
      <StatusBar barStyle="light-content"/>
      <View
        className="w-full h-28 justify-center items-center bg-darkheader"
      >
        <Image
          className="" 
          source={require('../../../assets/logo-png.png')}
        />
      </View>
      <View 
        className="flex-1"
      >
        <Pressable
          className="w-12 h-12 items-center justify-center absolute top-3 right-3 bg-tgreen rounded-xl"
          onPress={() => navigation.navigate('Search')}
        >
          <Icon name="search" size={35} color={'#ffffff'} />
        </Pressable>
        <View
          className="absolute top-16 left-3"
        >
          <Text
            className="text-white text-2xl mb-2"
          >
            Mais lidos do mês
          </Text>
        </View>
      </View>
    </View>
  );
}