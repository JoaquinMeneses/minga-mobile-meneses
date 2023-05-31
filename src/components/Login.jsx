import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { API_URL } from 'react-native-dotenv';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleForm = () => {
        const dataUser = {
            email: email,
            password: password
        }

        axios.post(API_URL + "auth/signin", dataUser)
            .then(res => {
                console.log(res.data.message);
                AsyncStorage.setItem("token", res.data.token);
                AsyncStorage.setItem("user", JSON.stringify(res.data.user));
                navigation.navigate('Home'); // Redirigir al componente Home
            })
            .catch(err => {
                console.log(err.response.data.message);
            });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#f3a9cc" // Cambiar a color rosado
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#f3a9cc" // Cambiar a color rosado
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Pressable
                style={styles.button}
                onPress={handleForm}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginBottom: 8,
        color: 'white',
        width: '60%',
    },
    button: {
        backgroundColor: '#f3a9cc',
        width: '60%',
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 8,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
