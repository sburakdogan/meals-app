import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
    return (
        data.map((dataItem) => (
            <View key={dataItem} style={styles.textContainer}>
                <Text style={styles.text}>{dataItem}</Text>
            </View>
        ))
    )
}

export default List;

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: '#BD2100',
        padding: 12,
        margin: 6,
        borderRadius: 8,
        // alignContent: 'center',
        // justifyContent: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
});