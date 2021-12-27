import React, { useState, useContext } from 'react'
import './SideNavSection.css'
import { RecipeContext } from '../context'

function SideNavSection({title, items}) {

    const {state, dispatch} = useContext(RecipeContext);

    const [season, setSeason] = useState("");

    const handleChange = (title, item) => {
        if(title === 'Season'){
            dispatch({type: 'SET_SEASON', data: item});
        }else if(title === 'Dietary Preference'){
            dispatch({type: 'SET_PREFERENCE', data: item});
        }else if(title === 'Season'){
            dispatch({type: 'SET_MEAL', data: item});
        }
        
        console.log(item);
    }

    const seasonList = state.rawData.filter((recipe) => {    
        if('summer' === recipe.season.toLowerCase()){ return recipe }
    })
        // if(item.toLowerCase() === state.season.toLowerCase()){
        //     console.log(item);
        //     return item;
        // }
    
    console.log('hi----------', seasonList.length)
    
    return (
        <div className='side__nav__section'>
            <h3>{title}</h3>
            {items.map((item) => {
                return <span><input type="checkbox" onChange={()=>handleChange(title, item)} className='checkbox'/>{item}</span>
            })}
        </div>
    )
}

export default SideNavSection
