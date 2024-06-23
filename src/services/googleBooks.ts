import axios from 'axios';
import { GOOGLE_BOOKS_URL, API_KEY } from './APIconfig';

export const searchBooks = async (query: string) => {
  try {
    const response = await axios.get(`${GOOGLE_BOOKS_URL}?q=${query}&key=${API_KEY}`);
    return response.data.items;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    return [];
  }
}