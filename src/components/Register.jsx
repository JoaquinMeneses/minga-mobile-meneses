import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from 'react-native-dotenv';

export default function Login() {
    const navigation = useNavigation(); // Obtener la navegación

    const [errors, setErrors] = useState([]);
    const [inputError, setInputError] = useState(false);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleForm = () => {
        setLoading(true);

        const dataRegister = {
            name: name,
            photo: photo,
            email: email,
            password: password,
        };

        const dataUser = {
            email: email,
            password: password,
        };

        axios
            .post(API_URL + 'auth/signup', dataRegister)
            .then((res) => {
                axios
                    .post(API_URL + 'auth/signin', dataUser)
                    .then((res) => {
                        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
                        console.log(res.data.message);
                        AsyncStorage.setItem('token', res.data.token);
                        setLoading(false);
                        navigation.navigate('UserRegistred');
                    })
                    .catch((err) => {
                        const errorMessages = err.response.data.message;
                        console.log(errorMessages);
                        setErrors(errorMessages);
                        setInputError(true);
                        setLoading(false);
                    });
            })
            .catch((err) => {
                let errorMessages = err.response.data.message;
                if (!Array.isArray(errorMessages)) {
                    errorMessages = [errorMessages];
                }
                console.log(errorMessages);
                setErrors(errorMessages);
                setInputError(true);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.input,
                    inputError && { borderBottomColor: 'red' },
                ]}
                placeholder="Name"
                placeholderTextColor="#f3a9cc"
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize="none"
            />
            <TextInput
                style={[
                    styles.input,
                    inputError && { borderBottomColor: 'red' },
                ]}
                placeholder="Email"
                placeholderTextColor="#f3a9cc"
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
            />
            <TextInput
                style={[
                    styles.input,
                    inputError && { borderBottomColor: 'red' },
                ]}
                placeholder="Password"
                placeholderTextColor="#f3a9cc"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <TextInput
                style={[
                    styles.input,
                    inputError && { borderBottomColor: 'red' },
                ]}
                placeholder="Photo"
                placeholderTextColor="#f3a9cc"
                value={photo}
                onChangeText={(text) => setPhoto(text)}
                autoCapitalize="none"
            />
            {inputError && (
                <View style={styles.errorContainer}>
                    {errors.map((error, index) => (
                        <Text key={index} style={styles.errorText}>
                            {error}
                        </Text>
                    ))}
                </View>
            )}
            <Pressable style={styles.button} onPress={handleForm}>
                {loading ? (
                    <ActivityIndicator color="white" size="small" />
                ) : (
                    <Text style={styles.buttonText}>Register</Text>
                )}
            </Pressable>
            <View style={styles.orContainer}>
                <View style={styles.orBorder} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.orBorder} />
            </View>
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
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    orBorder: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
    },
    registerText: {
        color: 'white',
        marginTop: 10,
    },
    errorContainer: {
        marginTop: 8,
    },
    errorText: {
        color: 'red',
        marginTop: 4,
    },
});
