import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, StatusBar, View, Image } from 'react-native';
import MenuNavigation from '../components/MenuNavigation';
import store from '../store/store';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

export default function DetailManga({ route }) {
    const [authorData, setAuthorData] = useState(null);

    const { manga } = route.params;

    const categories = store((state) => state.categories);
    const fetchCategories = store((state) => state.fetchCategories);

    const category = categories.find((category) => category._id === manga.category_id);

    useEffect(() => {
        if (categories.length === 0) {
            fetchCategories();
        }
        axios.get(API_URL + 'api/authors/' + manga.author_id)
            .then(res => {
                setAuthorData(res.data.response);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: manga.cover_photo }} style={styles.backgroundImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{manga.title}</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.categoryInfo}>
                        <Text style={[styles.categoryName, { color: categories.find(category => category._id === manga.category_id)?.color || 'black' }]}>
                            {category.name}
                        </Text>
                    </View>
                    {authorData && (
                        <View style={styles.authorInfo}>
                            <Image source={{ uri: authorData.photo }} style={styles.logo} />
                            <Text style={styles.authorName}>{authorData.name}</Text>
                        </View>
                    )}
                </View>
                <Text style={styles.description}>{manga.description}</Text>
            </View>

            <MenuNavigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24282d',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.2,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: "10%"
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 16,
        textAlign: 'center',
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    categoryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    authorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 8,
    },
    authorName: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    categoryName: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    description: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
