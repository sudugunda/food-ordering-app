import React, { useState, useContext, useEffect } from 'react'
import Recipe from './Recipe'
import './RecipeList.css'
import { recipeData } from '../data'
import { RecipeContext } from '../context'

function RecipeList() {

    const {state, dispatch} = useContext(RecipeContext);

    const list = state.rawData.filter((item)=>{
        if(item.season === state.season && 
            item.dietaryPreference === state.dietaryPreference &&
            item.meal === state.meal){
            return item;
        }
    });

    useEffect(() => {
        dispatch({type: 'SET_LIST', data: list})
    }, [])

    // const list = state.rawData.filter((item)=>{
    //     if(item.season === state.season && 
    //         item.dietaryPreference === state.dietaryPreference &&
    //         item.meal === state.meal){
    //         return item;
    //     }
    // });

    // dispatch({type: 'SET_LIST', data: list})
    // console.log(state.season, state.dietaryPreference, state.meal);
    console.log('hi', state.currentList);

    const [listRecipe, setListRecipe] = useState(state.currentList);


    return (
        <div className='recipe__list'>
            {state.currentList.map(({id, img, time, likeMsg, description}) => {
                return <Recipe id={id} image={img} time={time} procedure={likeMsg} description={description}/>
            })}
            {/* {listRecipe.map(({id, image, time, procedure, description}) => {
                return <Recipe id={id} image={image} time={time} procedure={procedure} description={description}/>
            })} */}
        </div>
    )
}

export default RecipeList
