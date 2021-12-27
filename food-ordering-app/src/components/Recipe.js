import React from 'react'
import "./Recipe.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

function Recipe({id, image, time, procedure, description}) {
    return (
        <div className='recipe' id={id}>
            <img src={image} alt={`image${id}`}/>
            <div className='info'>
                <span><WatchLaterOutlinedIcon/>{time}</span><span><ThumbUpAltOutlinedIcon />{procedure}</span>
            </div>
            <p className='description'>
                {description}
            </p>
        </div>
    )
}

export default Recipe
