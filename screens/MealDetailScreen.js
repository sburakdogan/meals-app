import { ScrollView, View, Text, Image, StyleSheet, Platform } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useContext, useLayoutEffect } from 'react';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation }) {
    const favoritesContext = useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const meal = MEALS.find((item) => item.id === mealId);
    const isFavorite = favoritesContext.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        if(isFavorite) {
            favoritesContext.removeFavorite(mealId);
        } else {
            favoritesContext.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return (
                    <IconButton 
                        icon={isFavorite ? 'heart' : 'heart-outline'}
                        color='white'
                        onPress={changeFavoriteStatusHandler}
                    />
                );
            }
        });
    }, [changeFavoriteStatusHandler, navigation])

    return (
        <View style={styles.meal}>
            <ScrollView>
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={{ url: meal.imageUrl }} />
                    <Text style={styles.title}>{meal.title}</Text>
                    <MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} />
                </View>
                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>INGREDIENTS</Subtitle>
                        <List data={meal.ingredients} />
                        <Subtitle>STEPS</Subtitle>
                        <List data={meal.steps} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    meal: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        padding: 16
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        fontWeight: 'bold'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '90%'
    }
})