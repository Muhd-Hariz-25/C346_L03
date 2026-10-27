import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Movie = ({ title, year }) => {
    return (
        <Text style={styles.movieText}>
            {title} {year}
        </Text>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Movie title="Promised Shards: Origin" year={2029} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default App;