import { View, Text, TextInput, Button, Pressable } from "react-native";
import { searchBooks } from "../../services/googleBooks";
import { useState } from "react";
import { Card } from "../../components/Card";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/routes';
import Icon from "react-native-vector-icons/Feather";

type SearchScreenNavigationProp = NavigationProp<RootStackParamList, 'Search'>;


export const Search = () => {
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

  const navigation = useNavigation<SearchScreenNavigationProp>();
  
  return (
    <View
      className="flex-1 bg-dark"
    >
      <TextInput
          className="w-9/12 h-12 bg-white text-center text-lg text-black m-5 rounded-lg"
          placeholder='Buscar um livro'
          placeholderTextColor="#000000"
          onChangeText={setQuery}
          value={query}
        >
        </TextInput>
        <Pressable
          className="justify-center items-center absolute right-6 mt-5 w-12 h-12 bg-tgreen rounded-xl"
          onPress={handleSearch}
        >
          <Icon name="search" size={35} color={'#ffffff'} />
        </Pressable>
        {error && <Text className="text-red-500">{error}</Text>}
          {books.length > 0 && books[0] && books[0].volumeInfo && (
            <Card
              title={books[0].volumeInfo.title}
              description={books[0].volumeInfo.description}
              imageUrl={books[0].volumeInfo.imageLinks?.thumbnail}
           />
         )}
    </View>
  );
}