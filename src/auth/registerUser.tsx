import axios, { AxiosResponse, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RegisterUserRequest {
  full_name: string;
  password: string;
  student_class: string;
  grade: number;
}

interface ErrorResponse {
  message: string;
}

interface RegisterUserResponse {
  token: string;
}

const registerUser = async (userData: RegisterUserRequest): Promise<RegisterUserResponse> => {
  try {
    const response: AxiosResponse<RegisterUserResponse> = await axios.post('http://192.168.0.107:5000/student', userData);

    const { token } = response.data;

    if (!token) {
      throw new Error('Token não encontrado na resposta');
    }

    await AsyncStorage.setItem('token', token);

    console.log('User registered with token:', token);

    return response.data;
  } catch (error) {
    let errorMessage = 'Erro de servidor';

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        const responseData = axiosError.response.data as ErrorResponse;

        if (responseData.message) {
          errorMessage = responseData.message;
        }
      }
    }

    console.error('Error registering user:', errorMessage);
    throw new Error(errorMessage);
  }
};

export default registerUser;
