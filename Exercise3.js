import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Movie = ({ title, year, icon_name, poster }) => {
    return (
        <View style={styles.movieCard}>
            {/* 1. Image component placed above the text */}
            <Image source={poster} style={styles.poster} />

            {/* 2. Row with Icon and Text below the image */}
            <View style={styles.movieRow}>
                <FontAwesome name={icon_name} size={24} color="#333" style={styles.icon} />
                <Text style={styles.movieText}>
                    {title} {year}
                </Text>
            </View>
        </View>
    );
};

const Exercise3 = () => {
    return (
        <View style={styles.container}>
            <Movie
                title="Terminus Exclusion: Count Off"
                year={2034}
                icon_name="film"
                poster={require('./img/terminus.jpg')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    movieCard: {
        alignItems: 'center',
    },
    poster: {
        width: 400,
        height: 500,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 16,
    },
    movieRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    movieText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Exercise3;