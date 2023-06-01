import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

export default function MenuNavigation() {
    const navigation = useNavigation();
    const [logoutConfirmationVisible, setLogoutConfirmationVisible] = useState(false);

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

    const toggleLogoutConfirmation = () => {
        setLogoutConfirmationVisible(!logoutConfirmationVisible);
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
                <TouchableOpacity style={styles.navItem} onPress={toggleLogoutConfirmation}>
                    <Text style={styles.navText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={logoutConfirmationVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={toggleLogoutConfirmation}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to logout?</Text>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={confirmLogout}>
                            <Text style={styles.buttonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={toggleLogoutConfirmation}>
                            <Text style={styles.buttonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#FF6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
