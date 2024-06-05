import { Pressable, Text, TextInput, View, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/routes';

type CadastroScreenNavigationProp = NavigationProp<RootStackParamList, 'Cadastro'>;

export const Cadastro = () => {
  const navigation = useNavigation<CadastroScreenNavigationProp>();

  return (
    <View className='flex-1 justify-center items-center bg-dark'>
      <StatusBar barStyle="light-content" />
      <Text 
        className='text-tgreen text-7xl mb-24 italic'
      >
        Bibliotech
      </Text>
      <TextInput 
        className='w-80 h-16 bg-white text-center text-xl rounded-xl my-8' 
        placeholder='Usuario'
        placeholderTextColor="#000000"
      >
      </TextInput>
      <TextInput 
        className='w-80 h-16 bg-white text-center text-black text-xl rounded-xl my-8' 
        placeholder='Senha'
        placeholderTextColor="#000000"
      >
      </TextInput>
      <TextInput 
        className='w-80 h-16 bg-white text-center text-xl rounded-xl my-8' 
        placeholder='Confirmar senha'
        placeholderTextColor="#000000"
      >
      </TextInput>
      <Pressable 
        className='w-48 h-16 bg-tgreen rounded-xl justify-center items-center mt-10'
        onPress={() => navigation.navigate('Login')}  
      >
        <Text className='text-white text-xl'>Cadastrar</Text>
      </Pressable>
      <Pressable
        className='absolute bottom-[16]'
        onPress={() => navigation.navigate('Login')}
      >
        <Text
          className='text-white text-xl'
        >
          Já possui cadastro? <Text className='text-sky-600 underline'>ENTRAR</Text>
        </Text>
      </Pressable>  
    </View>
  );
}

