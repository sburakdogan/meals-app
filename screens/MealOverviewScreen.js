import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

function MealOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    const meals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    },[categoryId, navigation])
    
    return <MealsList meals={meals} navigation={navigation}/>
}

export default MealOverviewScreen;