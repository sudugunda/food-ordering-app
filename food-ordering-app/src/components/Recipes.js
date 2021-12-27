import React from 'react'
import RecipeList from './RecipeList'
import './Recipes.css'
import SideNav from './SideNav'
import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../context';
import { RecipeContext } from '../context'

function Recipes() {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state.currentList);

    return (
        <RecipeContext.Provider value={{state, dispatch}}>
            <div className='recipes'>
                <SideNav/>
                <RecipeList/>
            </div>
        </RecipeContext.Provider>
    )
}

export default Recipes
