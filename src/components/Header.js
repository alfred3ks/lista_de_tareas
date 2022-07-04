import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Lista de tareas</h1>
            <button className='neader__button'>
                No mostrar completadas
                <FontAwesomeIcon
                icon={faEyeSlash}
                className='header__icon-button'/>
            </button>
        </header>
    );
}

export default Header;