import { View, Text, Pressable, TextInput, StatusBar } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/routes';

type CadastroScreenNavigationProp = NavigationProp<RootStackParamList, 'Cadastro'>;

export const Login = () => {
  const navigation = useNavigation<CadastroScreenNavigationProp>();

  return (
    <View className='flex-1 justify-center items-center bg-dark'>
      <StatusBar barStyle="light-content" />
      <Text 
        className='text-tgreen text-7xl italic mb-40'
      >
        Bibliotech
      </Text>
      <TextInput 
        className='w-80 h-16 bg-white text-center text-xl rounded-xl' 
        placeholder='Usuario'
        placeholderTextColor="#000000"
      >
      </TextInput>
      <TextInput 
        className='w-80 h-16 bg-white text-center text-xl rounded-xl my-16' 
        placeholder='Senha'
        placeholderTextColor="#000000"
      >
      </TextInput>
      <Pressable 
        className='w-48 h-16 bg-tgreen rounded-xl justify-center items-center mt-10'
        onPress={() => navigation.navigate('Home')}
      >
        <Text className='text-white text-xl'>Logar</Text>
      </Pressable>
      <Pressable
        className='absolute bottom-[16]'
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text
          className='text-white text-xl'
        >
          Não possui cadastro? <Text className='text-sky-600 underline'>CADASTRAR</Text>
        </Text>
      </Pressable>  
    </View>
  );
}