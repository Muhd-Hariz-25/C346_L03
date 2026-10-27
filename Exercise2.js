import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// the Movie component now displays an icon from the FontAwesome6 library
// at the terminal, do this -> npm install @expo/vector-icons

const Movie = ({title, year, icon_name})=> {
    return (
        <View>
            <Text>
                {title} {year} <FontAwesome6 name={icon_name} size={24} color="black" />
            </Text>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <Movie title  = "Promised Shards: Uncovered (Series 1)" year = "2028" icon_name={"pager"}/>
            <Movie title  = "Terminus Exclusion: Count Off" year = "2034" icon_name={"pager"} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});