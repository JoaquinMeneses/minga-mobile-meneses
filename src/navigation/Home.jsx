import React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, ImageBackground, Pressable } from 'react-native';
import MenuNavigation from '../components/MenuNavigation';
import { useNavigation } from '@react-navigation/native'

const background = { uri: 'https://i.postimg.cc/x87mpCM2/Tokyo.png' }

export default function Home() {
    const navigation = useNavigation();

    const handleToggleView = () => {
        navigation.navigate('Mangas');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ImageBackground source={background} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.overlay} />
                <View style={styles.centerContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Live the emotion of the manga</Text>
                        <Text style={styles.subtitle}>Find the perfect manga for you</Text>
                        <Pressable onPress={handleToggleView} style={styles.button}>
                            <Text style={styles.buttonText}>Explore</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
            <MenuNavigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24282d',
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16,
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#f3a9cc',
        width: '60%',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
