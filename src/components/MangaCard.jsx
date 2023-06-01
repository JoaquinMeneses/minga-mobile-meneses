import React from 'react';
import { Text, StyleSheet, Image, View, Pressable } from 'react-native';

const MangaCard = ({ manga, categories }) => {
    const category = categories.find((category) => category._id === manga.category_id);
    const textColor = category ? category.color : 'black';

    const handlePress = () => {
        console.log("Implementación a futuro de detalles");
    };

    return (
        <View style={styles.card}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{manga.title}</Text>
                <Pressable onPress={handlePress} style={[styles.buttonStyle, { backgroundColor: textColor }]}>
                    <Text style={styles.buttonText}>View manga</Text>
                </Pressable>
            </View>
            <Image source={{ uri: manga.cover_photo }} style={styles.image} />
        </View >
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ebebeb',
        flexDirection: 'row',
        marginHorizontal: "10%",
        marginBottom: "5%",
        borderRadius: 20,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        borderRadius: 20,
        borderBottomLeftRadius: 80,
        borderTopLeftRadius: 80,
        width: 120,
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    buttonStyle: {
        alignSelf: 'center',
        width: '50%',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});

export default MangaCard;
