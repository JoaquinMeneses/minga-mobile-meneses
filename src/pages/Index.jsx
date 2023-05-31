import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Login from '../components/Login';
import Register from '../components/Register';

const image = { uri: 'https://i.postimg.cc/PxNmn6z6/Pixerl-Art.jpg' };

export default function Index() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome to Minga</Text>
                    <Login />
                    
                    {/* Añade el borde blanco y la palabra "or" */}
                    <View style={styles.orContainer}>
                        <View style={styles.orBorder} />
                        <Text style={styles.orText}>OR</Text>
                        <View style={styles.orBorder} />
                    </View>
                    
                    <Register />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Created by Joaquin Meneses</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
        marginTop: 50
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
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    footerText: {
        color: 'white',
    },
});
