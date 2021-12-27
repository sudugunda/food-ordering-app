import React from 'react'
import './RecipeIndex.css'
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import WifiIcon from '@material-ui/icons/Wifi';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Recipes from './Recipes';

function RecipeIndex() {
    return (
        <div className='recipe__index'>
            <header className='recipe__index__header'>
                <a href="#" className='logo'>Sudu</a>
                <div className='header__right'>
                    <div className='searchbar'>
                        <div className='search'>
                            <select name="categories" className='categories' id="categories">
                                <option value="all-categories">ALL CATEGORIES</option>
                                <option value="forum">FORUM</option>
                                <option value="books">BOOKS</option>
                                <option value="popular">POPULAR</option>
                            </select>
                            <input type="search" placeholder='Search recipes...' className='search__input'/>
                        </div>
                        <SearchIcon className='search__logo'/>
                    </div>
                    <a href="#" className='favorites'>
                        <BookmarkBorderIcon/>
                        <span>Favorites</span>
                    </a>
                    <div className='vertical'></div>
                    <a href="#" className='cart'>
                        <ShoppingBasketIcon/>
                        <span>Cart(0.00)</span>
                    </a>
                </div>
            </header>
            <hr/>
            <nav className='navbar__logos'>
                <ul className='nav__list'>
                    <li className='nav__item'>Home</li>
                    <li className='nav__item'>CATEGORIES</li>
                    <li className='nav__item'>RECIPES</li>
                    <li className='nav__item'>CONTACT</li>
                    <li className='nav__item'>ABOUT</li>
                </ul>
                <ul className='logo__list'>
                    <li className='nav__item'><InstagramIcon /></li>
                    <li className='nav__item'><TwitterIcon /></li>
                    <li className='nav__item'><FacebookIcon /></li>
                    <li className='nav__item'><EmailIcon /></li>
                    <li className='nav__item'><WifiIcon /></li>
                    <li className='nav__item'><YouTubeIcon /></li>
                </ul>
            </nav>
            <hr/>
            <Recipes />
        </div>
    )
}

export default RecipeIndex
