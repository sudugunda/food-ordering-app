

// filter1 meals filter
export function mealsFilter({rawData, setSummer, setWinter, setSpring, setAutumn, setDiaryFree, setEggFree, setGlutenFree, setHealthy, setQuickAndEasy, setBreakfast, setDessert, setDinner, setHolidays, setSnacks}){

    let newList = [];
    if((setBreakfast && setDessert  && setDinner  && setHolidays  && setSnacks) ||
       !setBreakfast && !setDessert  && !setDinner  && !setHolidays  && !setSnacks){
        newList = rawData;
    }else{
        if(setBreakfast){
            console.log('setBreakfast');
            newList = [...newList, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'breakfast' ){
                    return recipe;
                }
            })]
        }if(setDessert){
            console.log('setDessert');
            newList = [...newList, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'dessert' ){
                    return recipe;
                }
            })]
        }if(setDinner){
            console.log('setDinner');
            newList = [...newList, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'dinner' ){
                    return recipe;
                }
            })]
        }if(setHolidays){
            console.log('setHolidays');
            newList = [...newList, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'holidays' ){
                    return recipe;
                }
            })]
        }if(setSnacks){
            console.log('setSnacks ');
            newList = [...newList, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'snacks and appetizers' ){
                    return recipe;
                }
            })]
        }
        
    }
    console.log(newList);
    return dietaryPreferenceFilter(newList, setSummer, setWinter, setSpring, setAutumn, setDiaryFree, setEggFree, setGlutenFree, setHealthy, setQuickAndEasy); 
}

// filter2 dietaryPreferenceFilter
export function dietaryPreferenceFilter(list, setSummer, setWinter, setSpring, setAutumn, setDiaryFree, setEggFree, setGlutenFree, setHealthy, setQuickAndEasy){
    let newList = []
    if((setDiaryFree && setEggFree && setGlutenFree && setHealthy && setQuickAndEasy) || 
       (!setDiaryFree && !setEggFree && !setGlutenFree && !setHealthy && !setQuickAndEasy)){
            newList = list;
    }else{
        if(setDiaryFree){
            console.log('setDiaryFree');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() === 'diary free' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }if(setEggFree){
            console.log('setEggFree ');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() === 'egg free' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }if(setGlutenFree){
            console.log('setGlutenFree ');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() === 'gluten free' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }if(setHealthy){
            console.log('setHealthy ');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() === 'healthy' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }if(setQuickAndEasy){
            console.log('setQuickAndEasy ');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() === 'quick and easy' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }
    }
    console.log(newList);
    return seasonFilter(newList, setSummer, setWinter, setSpring, setAutumn);
}

// filter3 seasonFilter
export function seasonFilter(list, setSummer, setWinter, setSpring, setAutumn){

    let newList = [];
    if((setSummer  && setWinter  && setSpring  && setAutumn) || 
        (!setSummer  && !setWinter  && !setSpring  && !setAutumn)){
            newList = list;
    }else{
        if(setSummer){
            console.log('setSummer ');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.season.toLowerCase() === 'summer' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }if(setWinter){
            console.log('setWinter ');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.season.toLowerCase() === 'winter' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }if(setSpring){
            console.log('setSpring ');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.season.toLowerCase() === 'spring' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }if(setAutumn){
            console.log('setAutumn ');
            newList = [...newList, ...list.filter((recipe)=>{
                if(recipe.season.toLowerCase() === 'autumn' ){
                    return recipe;
                }
            })]
            console.log(newList);
        }
    }
    console.log(newList);
    return newList;
}