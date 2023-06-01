import { create } from 'zustand';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from 'react-native-dotenv';

const store = create((set) => ({
    mangas: [],
    categories: [],
    fetchMangas: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            let headers = { headers: { 'Authorization': `Bearer ${token}` } };
            const res = await axios.get(API_URL + 'mangas', headers);
            set({ mangas: res.data.response });
        } catch (error) {
            console.log('Error:', error);
        }
    },
    fetchCategories: async () => {
        try {
            const res = await axios.get(API_URL + 'categories');
            set({ categories: res.data.categories });
        } catch (error) {
            console.log('Error:', error);
        }
    },
}));

export default store;
