import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {

    const toggleCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas)
    }
    return (
        <header className='header'>
            <h1 className='header__title'>Lista de tareas</h1>
            {
                mostrarCompletadas
                    ?
                    <button
                        className='header__button'
                        onClick={() => {
                            toggleCompletadas();
                        }}

                    >
                        No mostrar completadas
                        <FontAwesomeIcon
                            icon={faEyeSlash}
                            className='header__icon-button' />
                    </button>
                    :
                    <button
                        className='header__button'
                        onClick={() => {
                            toggleCompletadas();
                        }}
                    >
                        Mostrar Completadas
                        <FontAwesomeIcon
                            icon={faEye}
                            className='header__icon-button' />
                    </button>
            }
        </header>
    );
}

export default Header;