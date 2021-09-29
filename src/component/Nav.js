import React, { useState } from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
function Nav() {
    const [togleMenu, setTogleMenu] = useState(false)
    return (
        <div className="nav_bar_comp">
            <div className="nav_bar_conetent">
                <div className="logo">
                    <a href="">
                        <h1>S2 <span>brute</span></h1>
                    </a>
                </div>
                <div className="menu_btn" onClick={()=>setTogleMenu(!togleMenu)}>
                    {togleMenu ? <i class="fas fa-times"></i> :<i class="fas fa-bars"></i> }
                </div>
                <div className={togleMenu ? "nav_bar_link" : "nav_bar_link_toggle" }>
                    <NavLink exact activeClassName='active_class' to="/">Home</NavLink>
                    <NavLink exact activeClassName='active_class' to="/About">About Us</NavLink>
                    <NavLink exact activeClassName='active_class' to="/Service">Services & Faslity</NavLink>
                    <NavLink exact activeClassName='active_class' to="/Trainer">Trainer</NavLink>
                    <NavLink exact activeClassName='active_class' to="/Contact">Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav
