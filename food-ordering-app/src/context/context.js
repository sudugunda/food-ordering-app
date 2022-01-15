import { rawData } from '../rawData'
import { createContext } from 'react'

export const initialState = {
    rawData: rawData,
    currentList: [],
    setSummer: false,
    setWinter: false,
    setSpring: false,
    setAutumn: false,
    setDiaryFree: false,
    setEggFree: false,
    setGlutenFree: false,
    setHealthy: false,
    setQuickAndEasy: false,
    setBreakfast: false,
    setDessert: false,
    setDinner: false,
    setHolidays: false,
    setSnacks: false,
};

export const reducer = (state = initialState, action) => {
    console.log(action.type);

    switch(action.type){
        case 'SET_SUMMER':
            return { ...state, setSummer: !state.setSummer }

        case 'SET_WINTER':
            return { ...state, setWinter: !state.setWinter }

        case 'SET_SPRING':
            return { ...state, setSpring: !state.setSpring }

        case 'SET_AUTUMN':
            return { ...state, setAutumn: !state.setAutumn }

        case 'SET_DAIRY_FREE':
            return { ...state, setDiaryFree: !state.setDiaryFree }

        case 'SET_EGG_FREE':
            return { ...state, setEggFree: !state.setEggFree }

        case 'SET_GLUTEN_FREE':
            return { ...state, setGlutenFree: !state.setGlutenFree }

        case 'SET_HEALTHY':
            return { ...state, setHealthy: !state.setHealthy }

        case 'SET_QUICKANDEASY':
            return { ...state, setQuickAndEasy: !state.setQuickAndEasy }

        case 'SET_BREAKFAST':
            return { ...state, setBreakfast: !state.setBreakfast }
    
        case 'SET_DESSERT':
            return { ...state, setDessert: !state.setDessert }

        case 'SET_DINNER':
            return { ...state, setDinner: !state.setDinner }
        
        case 'SET_HOLIDAYS':
            return { ...state, setHolidays: !state.setHolidays }

        case 'SET_SNACKS':
            return { ...state, setSnacks: !state.setSnacks }
        
        case 'SET_LIST':
            return { ...state, currentList:action.data }

        default :
            return { ...state }
    }
}

export const RecipeContext = createContext();