import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealOverview', {
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    }
    return (
        <View style={styles.categories}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2} />
        </View>
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    categories: {
        marginTop: 16
    }
})