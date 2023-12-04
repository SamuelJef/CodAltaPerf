import { Link } from 'react-router-dom';
import './Header.css';
import { AiOutlineUser } from "react-icons/ai";
import React from 'react';

function Header() {
    return (
        <div>
            <nav>
                <div className='navBar'>
                    <Link to="/" role='img'>Logo</Link>
                    <ul >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/company">Company</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/login" className='avatarIcon'><AiOutlineUser/></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Header