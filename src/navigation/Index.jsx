import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Login from '../components/Login';
import Register from '../components/Register';

const image = { uri: 'https://i.postimg.cc/PxNmn6z6/Pixerl-Art.jpg' };

export default function Index() {
    const [view, setView] = useState('Login');

    const handleToggleView = () => {
        setView(view === 'Login' ? 'Register' : 'Login');
    };

    const renderView = () => {
        if (view === 'Login') {
            return <Login />;
        } else if (view === 'Register') {
            return <Register />;
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome to Minga</Text>
                    {renderView()}
                    <Pressable onPress={handleToggleView}>
                        <Text style={styles.toggleViewText}>
                            {view === 'Login' ? "Don't have an account yet? Register" : "Already have an account? Log in"}
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Powered by Joaquin Meneses</Text>
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
    toggleViewText: {
        color: 'white',
        marginTop: 10,
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
