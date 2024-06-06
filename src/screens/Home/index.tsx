import { View, Text, Image, TextInput, StatusBar } from "react-native";
import { Card } from "../../components/Card";

export const Home = () => {
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
          className="w-40 h-10 bg-white text-center text-lg rounded-lg absolute right-3 top-3"
          placeholder='Buscar um livro'
          placeholderTextColor="#000000"
        >
        </TextInput>
        <View
          className="absolute top-16 left-3"
        >
          <Text
            className="text-white text-2xl mb-2"
          >
            Mais lidos do mês
          </Text>
          <Card />
        </View>
      </View>
    </View>
  );
}