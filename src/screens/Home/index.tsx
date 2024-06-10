import React, { useState } from "react";
import { View, Text, Image, TextInput, StatusBar, Button, ScrollView, FlatList } from "react-native";
import { Card } from "../../components/Card";
import { searchBooks } from "../Login/googleBooks";

export const Home = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null); // Reset any previous error
    const results = await searchBooks(query);
    if (results && results.length > 0) {
      setBooks(results);
    } else {
      setBooks([]);
      setError('No books found');
    }
  };
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
        <TextInput
          className="w-40 h-10 bg-white text-center text-lg text-black rounded-lg absolute right-3 top-9"
          placeholder='Buscar um livro'
          placeholderTextColor="#000000"
          onChangeText={setQuery}
          value={query}
        >
        </TextInput>
        <Button 
          title="Buscar" 
          onPress={handleSearch}
          />
        <View
          className="absolute top-16 left-3"
        >
          <Text
            className="text-white text-2xl mb-2"
          >
            Mais lidos do mês
          </Text>
          {error && <Text className="text-red-500">{error}</Text>}
          {books.length > 0 && books[0] && books[0].volumeInfo && (
            <Card
              title={books[0].volumeInfo.title}
              description={books[0].volumeInfo.description}
              imageUrl={books[0].volumeInfo.imageLinks?.thumbnail}
           />
         )}
        </View>
      </View>
    </View>
  );
}