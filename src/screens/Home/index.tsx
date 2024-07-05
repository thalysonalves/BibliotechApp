import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, StatusBar, Pressable, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/routes';
import { Card } from "../../components/Card";
import { api } from "../../services/axiosConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [books, setBooks] = useState<any[]>([])

  const fetchBooks = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const { data } = await api.get('/book', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <View className="flex-1 bg-dark">
      <StatusBar barStyle="light-content"/>
      <View className="w-full h-28 justify-center items-center bg-darkheader">
        <Image className="" source={require('../../../assets/logo-png.png')} />
      </View>
      <View className="flex-1">
        <Pressable
          className="w-12 h-12 items-center justify-center absolute top-3 right-3 bg-tgreen rounded-xl"
          onPress={() => navigation.navigate('Search')}
        >
          <Icon name="search" size={35} color={'#ffffff'} />
        </Pressable>
        <View className="absolute top-16 left-3">
          <Text className="text-white text-2xl mb-2">Mais lidos do mês</Text>
          <ScrollView>
            {books.map((book) => (
              <Card
                key={book.id}
                title={book.volumeInfo.title}
                description={book.volumeInfo.description}
                imageUrl={book.volumeInfo.imageLinks?.thumbnail}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
