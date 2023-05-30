import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Login from '../components/Login';

const image = { uri: 'https://i.postimg.cc/PxNmn6z6/Pixerl-Art.jpg' };

export default function Index() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome to Minga</Text>
                    <Login />
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
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
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
