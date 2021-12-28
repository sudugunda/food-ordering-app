import { RecipeContext } from '../context/context'

export function recipeFilter(state) {
    
};

export function filteredRecipes({ rawData, setSummer, setWinter, setSpring, setAutumn, setDiaryFree, setEggFree, setGlutenFree, setHealthy, setQuickAndEasy, setBreakfast, setDessert, setDinner, setHolidays, setSnacks}) {
    console.log('filteredRecipes called');
    let list = [];
    if(setBreakfast || setDessert  || setDinner  || setHolidays  || setSnacks){
        if(setBreakfast){
            console.log('setBreakfast');
            list = [...list, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'breakfast' ){
                    return recipe;
                }
            })]
        }if(setDessert){
            console.log('setDessert');
            list = [...list, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'dessert' ){
                    return recipe;
                }
            })]
        }if(setDinner){
            console.log('setDinner');
            list = [...list, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'dinner' ){
                    return recipe;
                }
            })]
        }if(setHolidays){
            console.log('setHolidays');
            list = [...list, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'holidays' ){
                    return recipe;
                }
            })]
        }if(setSnacks){
            console.log('setSnacks ');
            list = [...list, ...rawData.filter((recipe)=>{
                if(recipe.meal.toLowerCase() === 'snacks and appetizers' ){
                    return recipe;
                }
            })]
            console.log(list);
        }if(setDiaryFree || setEggFree || setGlutenFree || setHealthy || setQuickAndEasy){   
            if(!setDiaryFree){
                console.log('setDiaryFree ');
                list = list.filter((recipe)=>{
                    if(recipe.dietaryPreference.toLowerCase() !== 'diary free' ){
                        return recipe;
                    }
                });
                console.log(list);
            }if(!setEggFree){
                console.log('setEggFree ');
                list = list.filter((recipe)=>{
                    if(recipe.dietaryPreference.toLowerCase() !== 'egg free' ){
                        return recipe;
                    }
                });
                console.log(list);
            }if(!setGlutenFree){
                console.log('setGlutenFree ');
                list = list.filter((recipe)=>{
                    if(recipe.dietaryPreference.toLowerCase() !== 'gluten free' ){
                        return recipe;
                    }
                });
                console.log(list);
            }if(!setHealthy){
                console.log('setHealthy ');
                list = list.filter((recipe)=>{
                    if(recipe.dietaryPreference.toLowerCase() !== 'healthy' ){
                        return recipe;
                    }
                });
                console.log(list);
            }if(!setQuickAndEasy){
                console.log('setQuickAndEasy ');
                list = list.filter((recipe)=>{
                    if(recipe.dietaryPreference.toLowerCase() !== 'quick and easy' ){
                        return recipe;
                    }
                });
                console.log(list);
            }
        }if(setSummer || setWinter || setSpring || setAutumn){
            if(!setSummer){
                console.log('setSummer ');
                list = list.filter((recipe)=>{
                    if(recipe.season.toLowerCase() !== 'summer' ){
                        return recipe;
                    }
                });
            }if(!setWinter){
                console.log('winter');
                list = list.filter((recipe)=>{
                    if(recipe.season.toLowerCase() !== 'winter' ){
                        return recipe;
                    }
                });
            }if(!setSpring){
                console.log('setSpring ');
                list = list.filter((recipe)=>{
                    if(recipe.season.toLowerCase() !== 'spring' ){
                        return recipe;
                    }
                });
                console.log(list);
            }if(!setAutumn){
                console.log('setAutumn ');
                list = list.filter((recipe)=>{
                    if(recipe.season.toLowerCase() !== 'autumn' ){
                        return recipe;
                    }
                });
                console.log(list);
            }
        }
    }else if(setDiaryFree || setEggFree || setGlutenFree || setHealthy || setQuickAndEasy){
        let ll = rawData;
        if(!setDiaryFree){
            console.log('setDiaryFree ');
            ll = ll.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() !== 'diary free' ){
                    return recipe;
                }
            });
            console.log(list);
        }if(!setEggFree){
            console.log('setEggFree ');
            ll = ll.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() !== 'egg free' ){
                    return recipe;
                }
            });
            console.log(list);
        }if(!setGlutenFree){
            console.log('setGlutenFree ');
            ll = ll.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() !== 'gluten free' ){
                    return recipe;
                }
            });
            console.log(list);
        }if(!setHealthy){
            console.log('setHealthy ');
            ll = ll.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() !== 'healthy' ){
                    return recipe;
                }
            });
            console.log(list);
        }if(!setQuickAndEasy){
            console.log('setQuickAndEasy ');
            ll = ll.filter((recipe)=>{
                if(recipe.dietaryPreference.toLowerCase() !== 'quick and easy' ){
                    return recipe;
                }
            });
            list = ll;
            console.log(list);
        }if(setSummer || setWinter || setSpring || setAutumn){
            if(!setSummer){
                console.log('setSummer ');
                list = list.filter((recipe)=>{
                    if(recipe.season.toLowerCase() !== 'summer' ){
                        return recipe;
                    }
                });
            }if(!setWinter){
                console.log('winter');
                list = list.filter((recipe)=>{
                    if(recipe.season.toLowerCase() !== 'winter' ){
                        return recipe;
                    }
                });
            }if(!setSpring){
                console.log('setSpring ');
                list = list.filter((recipe)=>{
                    if(recipe.season.toLowerCase() !== 'spring' ){
                        return recipe;
                    }
                });
                console.log(list);
            }if(!setAutumn){
                console.log('setAutumn ');
                list = list.filter((recipe)=>{
                    if(recipe.season.toLowerCase() !== 'autumn' ){
                        return recipe;
                    }
                });
                console.log(list);
            }
        }
    }else if(setSummer || setWinter || setSpring || setAutumn){
        let ll = rawData;
        if(!setSummer){
            console.log('setSummer ');
            ll = ll.filter((recipe)=>{
                if(recipe.season.toLowerCase() !== 'summer' ){
                    return recipe;
                }
            });
        }if(!setWinter){
            console.log('winter');
            ll = ll.filter((recipe)=>{
                if(recipe.season.toLowerCase() !== 'winter' ){
                    return recipe;
                }
            });
            console.log(list);
        }if(!setSpring){
            console.log('setSpring ');
            ll = ll.filter((recipe)=>{
                if(recipe.season.toLowerCase() !== 'spring' ){
                    return recipe;
                }
            });
            console.log(list);
        }if(!setAutumn){
            console.log('setAutumn ');
            ll = ll.filter((recipe)=>{
                if(recipe.season.toLowerCase() !== 'autumn' ){
                    return recipe;
                }
            });
            console.log(list);
        }
        list = ll;
    }else{
        return rawData;
    }
    return list;
};