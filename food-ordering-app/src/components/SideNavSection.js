import React, { useState, useContext } from 'react'
import './SideNavSection.css'
import { RecipeContext } from '../context/context'

function SideNavSection({title, items}) {

    const {state, dispatch} = useContext(RecipeContext);

    const handleChange = (item) => {
        if(item.toLowerCase() === 'summer'){
            dispatch({type: 'SET_SUMMER'});
        }else if(item.toLowerCase() === 'spring'){
            dispatch({type: 'SET_SPRING'});
        }else if(item.toLowerCase() === 'autumn'){
            dispatch({type: 'SET_AUTUMN'});
        }else if(item.toLowerCase() === 'winter'){
            dispatch({type: 'SET_WINTER'});
        }else if(item.toLowerCase() === 'dairy free'){
            dispatch({type: 'SET_DAIRY_FREE'});
        }else if(item.toLowerCase() === 'egg free'){
            dispatch({type: 'SET_EGG_FREE'});
        }else if(item.toLowerCase() === 'gluten free'){
            dispatch({type: 'SET_GLUTEN_FREE'});
        }else if(item.toLowerCase() === 'healthy'){
            dispatch({type: 'SET_HEALTHY'});
        }else if(item.toLowerCase() === 'quick and easy'){
            dispatch({type: 'SET_QUICKANDEASY'});
        }else if(item.toLowerCase() === 'breakfast'){
            dispatch({type: 'SET_BREAKFAST'});
        }else if(item.toLowerCase() === 'dessert'){
            dispatch({type: 'SET_DESSERT'});
        }else if(item.toLowerCase() === 'dinner'){
            dispatch({type: 'SET_DINNER'});
        }else if(item.toLowerCase() === 'holidays'){
            dispatch({type: 'SET_HOLIDAYS'});
        }else if(item.toLowerCase() === 'snacks and appetizers'){
            dispatch({type: 'SET_SNACKS'});
        }
        console.log(item);
    }

    const seasonList = state.rawData.filter((recipe) => {    
        if('summer' === recipe.season.toLowerCase()){ return recipe }
    })
    
    return (
        <div className='side__nav__section'>
            <h3>{title}</h3>
            {items.map((item) => {
                return <span><input type="checkbox" onChange={()=>handleChange(item)} className='checkbox'/>{item}</span>
            })}
        </div>
    )
}

export default SideNavSection
