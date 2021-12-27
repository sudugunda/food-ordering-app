import React, { useState } from 'react'
import './SideNav.css'
import SideNavSection from './SideNavSection'
import SearchIcon from '@material-ui/icons/Search';
import { data } from '../data'

function SideNav() {

    const [list, setList] = useState(data);

    return (
        <div className='sidebar'>
            <h2>Filter Recipes</h2>
            <span>Check multiple boxes below to narrow recipe search results:</span>

            {list.map(({title, items}) => {
                return <SideNavSection title={title} items={items}/>
            })}

            <h3>Search Recipe Titles</h3>
            <div className="side__search__bar">
                <input type="search" placeholder='Enter Keyword...'/><SearchIcon className='search__logo'/>
            </div>
            
        </div>
    )
}

export default SideNav
