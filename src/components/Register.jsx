import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForm = () => {
        // Tu lógica para el inicio de sesión aquí
    };

    const handleLogin = () => {
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#f3a9cc"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#f3a9cc"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#f3a9cc"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#f3a9cc"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleForm}>
                <Text style={styles.buttonText}>Register</Text>
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
    orText: {
        color: 'white',
        paddingHorizontal: 10,
    },
    registerText: {
        color: 'white',
        marginTop: 10,
    },
});
