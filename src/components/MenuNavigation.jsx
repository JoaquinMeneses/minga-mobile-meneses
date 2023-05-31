import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MenuNavigation() {
    const navigation = useNavigation();

    const handleHome = () => {
        navigation.navigate('Home');
        console.log('Home');
    };

    const handleMangas = () => {
        navigation.navigate('Mangas');
        console.log('Mangas');
    };

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navItem} onPress={handleHome}>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={handleMangas}>
                    <Text style={styles.navText}>Mangas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'black',
    },
    navBar: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
    },
    navText: {
        color: 'white',
        fontSize: 18,
    },
});
