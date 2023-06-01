import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Modal } from 'react-native';
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

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

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
                <TouchableOpacity style={[styles.button, { backgroundColor: categories.find(category => category._id === manga.category_id)?.color || 'black' }]} onPress={toggleModal}>
                    <Text style={styles.buttonText}>Read Manga</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Functionality in progress</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
    button: {
        width: "60%",
        backgroundColor: '#FF6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 16,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
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
    closeButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
