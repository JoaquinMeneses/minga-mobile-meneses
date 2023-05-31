import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MenuNavigation from '../components/MenuNavigation';

export default function Mangas() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mangas</Text>
            <MenuNavigation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});
