import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView, StatusBar, View, TextInput, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import MenuNavigation from '../components/MenuNavigation';
import store from '../store/store';
import MangaCard from '../components/MangaCard';

export default function Mangas() {
    const mangas = store((state) => state.mangas);
    const fetchMangas = store((state) => state.fetchMangas);
    const categories = store((state) => state.categories);
    const fetchCategories = store((state) => state.fetchCategories);

    const [allMangas, setMangas] = useState(mangas);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        if (mangas.length === 0) {
            fetchMangas().then(() => setIsLoading(false));
        }
        if (categories.length === 0) {
            fetchCategories();
        }
    }, []);

    useEffect(() => {
        setMangas(mangas);
    }, [mangas]);

    const handleSearch = (text) => {
        setSearchText(text);
        const filteredMangas = mangas.filter((manga) =>
            manga.title.toLowerCase().includes(text.toLowerCase())
        );
        setMangas(filteredMangas);
        setNoResults(filteredMangas.length === 0);
    };

    const handleClearSearch = () => {
        setSearchText('');
        setMangas(mangas);
        setNoResults(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Explore</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search manga"
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                    {searchText.length > 0 && (
                        <TouchableOpacity onPress={handleClearSearch} style={styles.clearButton}>
                            <Text style={styles.clearButtonText}>Clear</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View style={styles.contentContainer}>
                {isLoading ? (
                    <Modal visible={isLoading} transparent={true}>
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    </Modal>
                ) : (
                    <>
                        {noResults ? (
                            <View style={styles.noResultsContainer}>
                                <Text style={styles.noResultsText}>The desired manga could not be found in our library</Text>
                            </View>
                        ) : (
                            <FlatList
                                style={styles.flatList}
                                data={allMangas}
                                renderItem={({ item }) => <MangaCard manga={item} categories={categories} />}
                                keyExtractor={(item) => item._id}
                            />
                        )}
                    </>
                )}
            </View>
            <MenuNavigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24282d',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        backgroundColor: 'white',
        width: '80%',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    clearButton: {
        backgroundColor: '#FFD6D6',
        padding: 8,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 10,
    },
    clearButtonText: {
        color: '#ff0000',
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        marginBottom: 40,
    },
    flatList: {
        backgroundColor: '#24282d',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noResultsText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
