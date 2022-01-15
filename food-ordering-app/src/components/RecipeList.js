import React, { useState, useContext, useEffect } from 'react'
import Recipe from './Recipe'
import './RecipeList.css'
import { RecipeContext } from '../context/context'
import { mealsFilter } from '../filter/filter'
import { seasonFilter } from '../jsonFilter'

function RecipeList() {

    const {state, dispatch} = useContext(RecipeContext);

    useEffect(() => {
        // let arr = mealsFilter(state);
        let arr = seasonFilter(state);
        dispatch({type: 'SET_LIST', data: arr})
    }, [state.setSummer, state.setWinter, state.setSpring, state.setAutumn,
        state.setDiaryFree, state.setEggFree, state.setGlutenFree, state.setHealthy, state.setQuickAndEasy,
        state.setBreakfast, state.setDessert, state.setDinner, state.setHolidays, state.setSnacks,
     ])

    return (
        <div className='recipe__list'>
            {state.currentList.map(({id, img, time, likeMsg, description, season, dietaryPreference, meal}) => {
                return <Recipe id={id} image={img} time={time} procedure={likeMsg} description={description} season={season} dietaryPreference={dietaryPreference} meal={meal}/>
            })}
        </div>
    )
}

export default RecipeList
