import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    FaBars,
    FaShoppingBag,
    FaTh,
    FaThList,
    FaUserAlt,
 } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Sidebar({children}) {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/home",
            name:"Makanan",
            icon:<FaShoppingBag/>
        },
        {
            path:"/menu",
            name:"Menu",
            icon:<FaThList/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        }
    ]
  return (
    <div className="container  side">
        <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}}  className="logo">GaFood<FontAwesomeIcon icon="fad fa-utensils-alt" /></h1> 
                <div style={{marginLeft: isOpen ? "50px" : "0px"}}  className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeclassName="aktif">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}}  className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}
