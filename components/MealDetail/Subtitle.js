import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitles}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitles: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#525252'
    },
    subtitleContainer: {
        margin: 6,
        padding: 4,
        borderBottomWidth: 2,
        borderBottomColor: '#525252'
    }
});