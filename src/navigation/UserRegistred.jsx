import React, { useEffect, useState } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const notFoundUser = { uri: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg' }

export default function Mangas() {
    const [user, setUser] = useState(null)

    const navigation = useNavigation()

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await AsyncStorage.getItem('user')
                if (userData) {
                    const parsedUser = JSON.parse(userData)
                    setUser(parsedUser)
                    console.log(parsedUser)
                }
            } catch (error) {
                console.log('Error retrieving user from AsyncStorage:', error)
            }
        }

        getUser()
    }, [])

    const handleToggleView = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Gracias por registrarte!</Text>
            <Text style={styles.subtitle}>Bienvenido a nuestra comunidad.</Text>
            {user && user.photo ? (
                <Image style={styles.logo} source={{ uri: user.photo }} />
            ) : (
                <Image style={styles.logo} source={notFoundUser} />
            )}
            <Text style={styles.text}>Email: {user ? user.email : ''}</Text>

            <Text style={styles.text}>Aquí puedes agregar contenido adicional para el usuario registrado, como:</Text>
            <Text style={styles.text}>- Información personalizada</Text>
            <Text style={styles.text}>- Acceso a funciones exclusivas</Text>
            <Text style={styles.text}>- Recomendaciones personalizadas</Text>
            <Text style={styles.text}>- Mostrar información del usuario (nombre, foto, etc.)</Text>

            <Pressable onPress={handleToggleView} style={styles.button}>
                <Text style={styles.buttonText}>Go to home</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3a9cc',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 32,
        color: 'white',
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 8,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 32,
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
})
