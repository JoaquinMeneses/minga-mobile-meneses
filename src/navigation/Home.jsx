import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MenuNavigation from '../components/MenuNavigation';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to your favorite manga reader</Text>
            <MenuNavigation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});
