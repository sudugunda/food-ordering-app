
import { jsonData } from './jsonData'

export function seasonFilter({setSummer, setWinter, setSpring, setAutumn, setDiaryFree, setEggFree, setGlutenFree, setHealthy, setQuickAndEasy, setBreakfast, setDessert, setDinner, setHolidays, setSnacks}){
    let arr = [];
        if((setSummer && setWinter && setSpring && setAutumn) || 
        (!setSummer && !setWinter && !setSpring && !setAutumn)){
            arr = jsonData.filter(obj => {
                return [...arr, ...obj.list];
            })
        }else{
            if(setSummer){
                arr = jsonData.filter(obj => {
                    if(obj.season === 'summer'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setWinter){
                arr = jsonData.filter(obj => {
                    if(obj.season === 'winter'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setSpring){
                arr = jsonData.filter(obj => {
                    if(obj.season === 'spring'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setAutumn){
                arr = jsonData.filter(obj => {
                    if(obj.season === 'autumn'){
                        return [...arr, ...obj.list];
                    }
                })
            }
        }
    return dietaryPreferenceFilter(arr, setDiaryFree, setEggFree, setGlutenFree, setHealthy, setQuickAndEasy, setBreakfast, setDessert, setDinner, setHolidays, setSnacks);
}

function dietaryPreferenceFilter({list, setDiaryFree, setEggFree, setGlutenFree, setHealthy, setQuickAndEasy, setBreakfast, setDessert, setDinner, setHolidays, setSnacks}){
    let arr = [];
        if((setDiaryFree && setEggFree && setGlutenFree && setHealthy && setQuickAndEasy) || 
        (!setDiaryFree && !setEggFree && !setGlutenFree && !setHealthy && setQuickAndEasy)){
            arr = list.filter(obj => {
                return [...arr, ...obj.list];
            })
        }else{
            if(setDiaryFree){
                arr = list.filter(obj => {
                    if(obj.dietaryPreference === 'dairy free'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setEggFree){
                arr = list.filter(obj => {
                    if(obj.dietaryPreference === 'egg free'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setGlutenFree){
                arr = list.filter(obj => {
                    if(obj.dietaryPreference === 'gluten free'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setHealthy){
                arr = list.filter(obj => {
                    if(obj.dietaryPreference === 'healthy'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setQuickAndEasy){
                arr = list.filter(obj => {
                    if(obj.dietaryPreference === 'quick and easy'){
                        return [...arr, ...obj.list];
                    }
                })
            }
        }
    return mealsFilter(arr, setBreakfast, setDessert, setDinner, setHolidays, setSnacks);
}

function mealsFilter(list, setBreakfast, setDessert, setDinner, setHolidays, setSnacks){
    let arr = [];
        if((setBreakfast && setDessert && setDinner && setHolidays && setSnacks) || 
        (!setBreakfast && !setDessert && !setDinner && !setHolidays && setSnacks)){
            arr = list.filter(obj => {
                return [...arr, ...obj.list];
            })
        }else{
            if(setBreakfast){
                arr = list.filter(obj => {
                    if(obj.meal === 'breakfast'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setDessert){
                arr = list.filter(obj => {
                    if(obj.meal === 'dessert'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setDinner){
                arr = list.filter(obj => {
                    if(obj.meal === 'dinner'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setHolidays){
                arr = list.filter(obj => {
                    if(obj.meal === 'holidays'){
                        return [...arr, ...obj.list];
                    }
                })
            }if(setSnacks){
                arr = list.filter(obj => {
                    if(obj.meal === 'snacks and appetizers'){
                        return [...arr, ...obj.list];
                    }
                })
            }
        }
    return arr;
}