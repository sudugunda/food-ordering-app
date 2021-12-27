import { rawData } from './rawData'
import { createContext } from 'react'

export const initialState = {
    rawData: rawData,
    currentList: [],
    season: "Summer",
    dietaryPreference: "diary free",
    meal: 'breakfast',
};

export const reducer = (state = initialState, action) => {
    // console.log(action.type, action.data);

    switch(action.type){
        case 'SET_SEASON':
            return { ...state, season: action.data }

        case 'SET_PREFERENCE':
            return { ...state, dietaryPreference: action.data }

        case 'SET_MEAL':
            return { ...state, meal: action.data }

        case 'SET_LIST':
            return { ...state, currentList: action.data }
        
        default :
            return { ...state }
    }
}

export const RecipeContext = createContext();