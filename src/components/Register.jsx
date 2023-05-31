import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Register() {
    const [showMessage, setShowMessage] = useState(false);

    const handleRegister = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>

            {showMessage && (
                <Text style={styles.messageText}>Future implementation in app</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
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
    messageText: {
        marginTop: 16,
        fontSize: 18,
        color: 'gray',
    },
});
