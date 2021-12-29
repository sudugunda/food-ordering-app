import React from 'react'
import "./Recipe.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

function Recipe({id, image, time, procedure, description, season, dietaryPreference, meal}) {
    return (
        <div className='recipe' id={id}>
            <img src={image} alt={`image${id}`}/>
            <div className='info'>
                <span><WatchLaterOutlinedIcon className="info__logo"/>{time}</span><span><ThumbUpAltOutlinedIcon className="info__logo"/>{procedure}</span>
            </div>
            <p className='add-info'><span>{season}</span><span>{meal}</span></p>
            <p className='description'>
                {description}{id}
            </p>
        </div>
    )
}

export default Recipe
