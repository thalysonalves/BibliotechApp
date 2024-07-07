import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, StatusBar, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../routes/routes';
import { registerUser, loginUser } from '../../store/authSlice';
import { RootState, AppDispatch } from '../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CadastroScreenNavigationProp = NavigationProp<RootStackParamList, 'Cadastro'>;

export const Cadastro = () => {
  const navigation = useNavigation<CadastroScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [student_class, setStudentClass] = useState<string>('');
  const [grade, setGrade] = useState<number | undefined>(undefined);

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    if (grade === undefined || isNaN(grade) || grade < 1 || grade > 3) {
      Alert.alert("Erro", "A série deve ser um número entre 1 e 3");
      return;
    }

    try {
      await dispatch(registerUser({ full_name: username, password: password, student_class: student_class, grade: grade })).unwrap();
      
      const loginResponse = await dispatch(loginUser({ full_name: username, password: password })).unwrap();
      
      if (loginResponse) {
        await AsyncStorage.setItem('token', loginResponse);
        await AsyncStorage.setItem('isRegistered', 'true');
        Alert.alert("Sucesso", "Cadastro realizado com sucesso", [
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        throw new Error('Token não encontrado na resposta de login');
      }
    } catch (err) {
      let errorMessage = 'Ocorreu um erro desconhecido';
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      Alert.alert("Erro", errorMessage);
    }
  };

  return (
    <View className='flex-1 justify-center items-center bg-dark'>
      <StatusBar barStyle="light-content" />
      <Text className='text-tgreen text-7xl mb-24 italic'>
        Bibliotech
      </Text>
      <TextInput 
        className='w-80 h-16 bg-white text-center text-black text-xl rounded-xl my-3' 
        placeholder='Nome Completo'
        placeholderTextColor="#000000"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        className='w-80 h-16 bg-white text-center text-black text-xl rounded-xl my-3' 
        placeholder='Senha'
        placeholderTextColor="#000000"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput 
        className='w-80 h-16 bg-white text-center text-black text-xl rounded-xl my-3' 
        placeholder='Confirmar senha'
        placeholderTextColor="#000000"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <View className='flex-row justify-between w-80'>
        <TextInput 
          className='flex-1 h-16 bg-white text-center text-black text-xl rounded-xl my-3 mr-2' 
          placeholder='Turma'
          placeholderTextColor="#000000"
          value={student_class}
          onChangeText={setStudentClass}
        />
        <TextInput 
          className='flex-1 h-16 bg-white text-center text-black text-xl rounded-xl my-3 ml-2' 
          placeholder='Série'
          placeholderTextColor="#000000"
          keyboardType="numeric"
          value={grade !== undefined ? grade.toString() : ''}
          onChangeText={(text) => {
            const num = Number(text);
            if (num >= 1 && num <= 3) {
              setGrade(num);
            } else {
              setGrade(undefined);
              Alert.alert('Erro', 'A série deve ser um número entre 1 e 3');
            }
          }}
        />
      </View>
      <Pressable 
        className='w-48 h-16 bg-tgreen rounded-xl justify-center items-center mt-10'
        onPress={handleRegister}
        disabled={loading}  
      >
        <Text className='text-white text-xl'>Cadastrar</Text>
      </Pressable>
      <Pressable
        className='absolute bottom-[16]'
        onPress={() => navigation.navigate('Login')}
      >
        <Text className='text-white text-xl'>
          Já possui cadastro? <Text className='text-sky-600 underline'>ENTRAR</Text>
        </Text>
      </Pressable>  
    </View>
  );
};
