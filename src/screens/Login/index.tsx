import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StatusBar, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/routes';
import { api } from '../../services/axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CadastroScreenNavigationProp = NavigationProp<RootStackParamList, 'Cadastro'>;

export const Login = () => {
  const navigation = useNavigation<CadastroScreenNavigationProp>();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/student-login', {
        full_name: fullName,
        password: password,
      });

      const { token } = response.data;

      await AsyncStorage.setItem('token', token);

      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro de Login', 'Usuário ou senha inválidos');
    }
  };

  return (
    <View className='flex-1 justify-center items-center bg-dark'>
      <StatusBar barStyle="light-content" />
      <Text className='text-tgreen text-7xl italic mb-40'>Bibliotech</Text>
      <TextInput 
        className='w-80 h-16 bg-white text-center text-black text-xl rounded-xl' 
        placeholder='Nome Completo'
        placeholderTextColor="#000000"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput 
        className='w-80 h-16 bg-white text-center text-black text-xl rounded-xl my-16' 
        placeholder='Senha'
        placeholderTextColor="#000000"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable 
        className='w-48 h-16 bg-tgreen rounded-xl justify-center items-center mt-10'
        onPress={handleLogin}
      >
        <Text className='text-white text-xl'>Logar</Text>
      </Pressable>
      <Pressable className='absolute bottom-[16]' onPress={() => navigation.navigate('Cadastro')}>
        <Text className='text-white text-xl'>
          Não possui cadastro? <Text className='text-sky-600 underline'>CADASTRAR</Text>
        </Text>
      </Pressable>  
    </View>
  );
};
