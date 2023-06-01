import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator, ImageBackground, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from 'react-native-dotenv';

const background = { uri: 'https://i.postimg.cc/PxNmn6z6/Pixerl-Art.jpg' };
const logo = { uri: 'https://i.postimg.cc/T3vVNcfF/Logo.png' };

export default function SignIn() {
    const navigation = useNavigation(); // Obtener la navegación

    const [errors, setErrors] = useState([]);
    const [inputError, setInputError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setErrors([]);
            setInputError(false);
            setEmail('');
            setPassword('');
            setLoading(false);
        });

        return unsubscribe;
    }, [navigation]);

    const handleForm = () => {
        setLoading(true);

        const dataUser = {
            email: email,
            password: password,
        };

        axios
            .post(API_URL + 'auth/signin', dataUser)
            .then((res) => {
                console.log(res.data.message);
                AsyncStorage.setItem('token', res.data.token);
                AsyncStorage.setItem('user', JSON.stringify(res.data.user));
                setLoading(false);
                navigation.navigate('Home');
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
    }

    const handleToggleView = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.content}>
                    <Image source={logo} resizeMode="cover" style={styles.logo} />
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
                    {inputError && (
                        <View style={styles.errorContainer}>
                            {errors.map((error, index) => (
                                <Text key={index} style={styles.errorText}>
                                    {error}
                                </Text>
                            ))}
                        </View>
                    )}
                    <Pressable style={styles.button} onPress={handleForm} disabled={loading}>
                        {loading ? (
                            <ActivityIndicator color="white" size="small" />
                        ) : (
                            <Text style={styles.buttonText}>Sign In</Text>
                        )}
                    </Pressable>
                    <Pressable
                        style={styles.orContainer}>
                        <View style={styles.orBorder} />
                        <Text style={styles.orText}>Don't have an account yet? </Text>
                        <Text
                            style={styles.handleToggleView}
                            onPress={handleToggleView}>
                            Register
                        </Text>
                        <View style={styles.orBorder} />
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: '10%',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        marginTop: '30%',
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
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginTop: '5%',
    },
    orBorder: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
    },
    orText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
    handleToggleView: {
        color: 'pink',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10,
        textDecorationLine: 'underline',
        textShadowColor: '#f3a9cc',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
})
