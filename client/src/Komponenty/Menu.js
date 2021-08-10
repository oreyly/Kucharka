import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalKontex } from '../Kontex/GlobKon/GlobalKontex';

const Menu = () => {
    const {surovina} = useContext(GlobalKontex);
    return (
        <div>
            <Link to="/">Hlavní strana</Link>
            <Link to="/pridej-matros">Přidání matroše</Link>
            <div>{surovina}</div>
        </div>
    )
}

export default Menu
