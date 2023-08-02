import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

function MealsList({navigation, meals}) {
    function renderMealItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealDetail', {
                mealId: itemData.item.id
            });
        }
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            duration: item.duration,
            complexity: item.complexity
        }
        
        return <MealItem {...mealItemProps} onPress={pressHandler}/>
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});