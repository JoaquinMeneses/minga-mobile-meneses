import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const background = { uri: 'https://i.postimg.cc/PxNmn6z6/Pixerl-Art.jpg' }
const logo = { uri: 'https://i.postimg.cc/T3vVNcfF/Logo.png' }

export default function Index() {

    const navigation = useNavigation() // Obtener la navegación

    const handleToggleView = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.content}>
                    <Image source={logo} resizeMode="cover" style={styles.logo} />
                    <Text style={styles.title}>Discover a world of manga and immerse yourself</Text>
                    <Text style={styles.subtitle}>Find the perfect manga for you</Text>
                    <Pressable
                        style={styles.button}>
                        <Text
                            onPress={handleToggleView}
                            style={styles.buttonText}>
                            Explore
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Powered by Joaquin Meneses</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: '10%',
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
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: 'white',
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
