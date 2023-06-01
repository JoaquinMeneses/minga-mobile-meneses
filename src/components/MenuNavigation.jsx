import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { API_URL } from 'react-native-dotenv'

export default function MenuNavigation() {
    const navigation = useNavigation()

    const handleHome = () => {
        navigation.navigate('Home')
        console.log('Home')
    }

    const handleMangas = () => {
        navigation.navigate('Mangas')
        console.log('Mangas')
    }

    async function logout() {
        try {
            const token = await AsyncStorage.getItem('token');
            let headers = { headers: { 'Authorization': `Bearer ${token}` } };
            await axios.post(API_URL + 'auth/signout', null, headers);

            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('user');

            navigation.navigate('Index');

            console.log('Logout exitoso');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navItem} onPress={handleHome}>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={handleMangas}>
                    <Text style={styles.navText}>Mangas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={logout}>
                    <Text style={styles.navText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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
})
