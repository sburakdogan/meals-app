import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen({navigation}) {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You don't have any favorite meals.</Text>
            </View>
        )
    }
    return <MealsList navigation={navigation} meals={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
})