import { View, Text, Image } from "react-native"

export const Card = () => {
  return (
    <View
      className="w-36 h-72 bg-cardcolor"
    >
      <Image 
        source={require("../../../assets/capa-livro.png")}
        className="w-36 h-56"
      />
      <Text
        className="text-white text-center mt-2 text-lg"
      >
        A Revolução dos Bichos
      </Text>
    </View>
  );
}