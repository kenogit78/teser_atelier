import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
            <h1> T'ESER</h1>
            
            <div className='links'>
                <Link to='/'> HOME</Link>
                <Link to='/shop'> SHOP</Link>
                <Link to='/contact'> CONTACT US</Link>
            </div>
        </nav>
    )
}
