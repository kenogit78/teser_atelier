import React from 'react'
import '../styles/global.css'
import Navbar from './Navbar'


export default function Layout( {children} ) {
    return (
        <div className='layout'>
            <Navbar />

            {children}

            <footer>
                <p> Copyright 2021 t'eser atelier </p>
            </footer>
        </div>
    )
}
