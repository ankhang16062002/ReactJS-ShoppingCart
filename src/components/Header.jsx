import React, {useEffect, useRef, useState} from 'react'

import logo from '../assets/images/Logo-2.png'

import {Link} from 'react-router-dom'
import { useLocation } from 'react-router'

const categorys = [
    {
        display: 'Trang chủ',
        path: '/'
    },
    {
        display: 'Sản phẩm',
        path: '/catalog'
    },
    {
        display: 'Phụ kiện',
        path: '/event'
    },
    {
        display: 'Liên hệ',
        path: '/contact'
    }
]

const Header = (props) => {

    const location = useLocation()
    const indexActive = categorys.findIndex((element) => element.path === location.pathname)

    const headerRef = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(document.documentElement.scrollTop > 80 || document.body.scrollTop > 80) {
                headerRef.current.classList.add('shirk')
            } else {
                headerRef.current.classList.remove('shirk')
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleShowHide = () => {
        setShow(!show)
    }



    return (
        <div className = 'header' ref = {headerRef}>
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header__navbar">
                    <div className= {`header__navbar__left ${show ? 'active' : ''}` }>
                        <div className="header__navbar__left__toggle" onClick = {() => handleShowHide()}>
                            <i className = "bx bx-chevron-left"></i>
                        </div>
                        <ul>
                            {
                                categorys.map((category, index) => (
                                    <li 
                                        key = {index} 
                                        className = {indexActive === index ? 'active' : ''}
                                        onClick = {() => handleShowHide()}
                                    >
                                        <Link to = {category.path}>{category.display}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="header__menu"  onClick = {() => handleShowHide()}>
                        <i className = "bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__navbar__right">
                        <div className="header__navbar__right__item">
                            <i className = "bx bx-search"></i>
                        </div>
                        <div className="header__navbar__right__item">
                            <Link to = '/cart'>
                            <i className = "bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__navbar__right__item">
                            <i className = "bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
