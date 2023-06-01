import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

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

    const confirmLogout = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            let headers = { headers: { Authorization: `Bearer ${token}` } };
            await axios.post(API_URL + 'auth/signout', null, headers);

            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('user');

            navigation.navigate('Index');

        } catch (error) {
            console.log(error);
        }
    };

    const showLogoutConfirmation = () => {
        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to logout?',
            [
                { text: 'No' },
                { text: 'Yes', onPress: confirmLogout },
            ],
            { cancelable: false }
        );
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
                <TouchableOpacity style={styles.navItem} onPress={showLogoutConfirmation}>
                    <Text style={styles.navText}>Logout</Text>
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
        backgroundColor: '#1e1e1e',
    },
    navBar: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    navText: {
        color: '#ffffff',
        fontSize: 16,
    },
});
