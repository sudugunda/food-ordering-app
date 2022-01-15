export const seasonFilter = ({rawData, setSummer, setWinter, setSpring, setAutumn, }) => {
    if(setSummer === setSpring === setWinter === setAutumn){
        return rawData.list;
    }else{
        return rawData.filter( season => { season.season === 'summer' || season.season === 'spring' || season.season === 'winter' || season.season === 'autumn' });
    }   
}

export const dietaryPreferenceFilter = ({list, setDiaryFree, setEggFree, setGlutenFree, setHealthy, setQuickAndEasy}) => {
    if(setDiaryFree === setEggFree === setGlutenFree === setHealthy === setQuickAndEasy){
        return list.list;
    }else{
        return list.filter( preference => { preference.dietaryPreference === 'dairy free' || preference.dietaryPreference === 'egg free' || preference.dietaryPreference === 'gluten free' || preference.dietaryPreference === 'healthy' || preference.dietaryPreference === 'quick and easy' });
    }   
}

export const mealsFilter = ({list, setBreakfast, setDessert, setDinner, setHolidays, setSnacks}) => {
    if(setBreakfast === setDessert === setDinner === setHolidays === setSnacks){
        return list.list;
    }else{
        return list.filter( meal => { meal.meal === 'breakfast' || meal.meal === 'dessert' || meal.meal === 'dinner' || meal.meal === 'holidays' || meal.meal === 'snacks and appetizers'});
    }   
}

const recipesFilter = (list, setItem1, setItem2, setItem3, setItem4, setItem5) => {
    
    if(setItem1 === setItem2 === setItem3 === setItem4){
        if(setItem1 === setItem2 === setItem3 === setItem4 === setItem5){
            return list.list;
        }
        return list.list;
    }else{
        return list.filter( item => { 
            if(item.hasOwnProperty(season)){
                item.season === 'summer' || item.season === 'spring' || item.season === 'winter' || item.season === 'autumn'
            }else if(item.hasOwnProperty(dietaryPreference)){
                item.dietaryPreference === 'dairy free' || item.dietaryPreference === 'egg free' || item.dietaryPreference === 'gluten free' || item.dietaryPreference === 'healthy' || item.dietaryPreference === 'quick and easy'
            }else{
                item.meal === 'breakfast' || item.meal === 'dessert' || item.meal === 'dinner' || item.meal === 'holidays' || item.meal === 'snacks and appetizers'
            }
        });
    }
}