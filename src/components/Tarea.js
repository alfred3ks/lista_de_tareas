import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({ tarea }) => {
  return (
    <li className='list-tasks__task'>
      <FontAwesomeIcon icon={faCheckSquare} className='list-tasks__icon list-tasks__icon-check' />
      <div className='list-tasks__text'>
        {tarea.texto}
      </div>
      <div className='list-tasks__container-buttons'>
        <FontAwesomeIcon icon={faEdit} className='list-tasks__icon list-tasks__icon-action' />
        <FontAwesomeIcon icon={faTimes} className='list-tasks__icon list-tasks__icon-action' />
      </div>
    </li>
  );
}

export default Tarea;