import { View, Text, TextInput, Button } from "react-native";
import { searchBooks } from "../Login/googleBooks";
import { useState } from "react";
import { Card } from "../../components/Card";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/routes';

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
      className="flex-1 items-center bg-dark"
    >
      <TextInput
          className="w-10/12 h-12 bg-white text-center text-lg text-black rounded-lg"
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