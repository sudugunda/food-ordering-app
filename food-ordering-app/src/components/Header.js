import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Header() {
    return (
        <div className='header'>
            <nav className='navbar'>
                <ul className='nav__list'>
                    <li className='nav__item'><a href="#" className='nav__link'>Forum</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>Categories</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>Books</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>Recipe Index</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>Popular</a></li>
                </ul>
                <ul className='btn__list'>
                    <li className='nav__item'><a href="#" className='nav__link'><AccountBoxIcon/><span>REGISTER</span></a></li>
                    <li className='nav__item'><a href="#" className='nav__link'><PersonIcon/><span>LOGIN</span></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
