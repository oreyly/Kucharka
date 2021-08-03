import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Link to="/">Hlavní strana</Link>
            <Link to="/pridej-matros">Přidání matroše</Link>
        </div>
    )
}

export default Menu
