import { View, Text, Image, TextInput, StatusBar } from "react-native";

export const Home = () => {
  return (
    <View
      className="flex-1 bg-dark"
    >
      <StatusBar barStyle="light-content"/>
      <View
        className="w-full h-28 items-center border-2 border-solid border-red-500 bg-darkheader"
      >
        <Image
          className="" 
          source={require('../../../assets/logo-png.png')}
        />
      </View>
      <View 
        className="flex-1 border-2 border-solid border-yellow-500"
      >
        <Text
          className="text-white"
        >
          Home
        </Text>
        <TextInput
          className="w-40 h-10 bg-white text-center text-lg rounded-lg ml-80"
          placeholder='Buscar um livro'
          placeholderTextColor="#000000"
        >
        </TextInput>
      </View>
    </View>
  );
}