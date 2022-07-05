import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const FormularioTareas = ({ tareas, cambiarTareas }) => {

  // Aqui tenemod el estado inicial del input:
  const [inputTarea, cambiarInputTarea] = useState('');

  // Con esta funcion obtenemos el valor del input.
  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  }

  // Le agregamos al formulario este evento de enviar:onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarTareas(
      [
        ...tareas,
        {
          id: uuidv4(),
          texto: inputTarea,
          completada: false
        }
      ]);
    // limpiamos el input del formulario:
    cambiarInputTarea('');
  }

  return (

    <form action="" className='form-tasks' onSubmit={handleSubmit}>
      <input
        type="text"
        className='form-tasks__input'
        placeholder='Escribe una tarea'
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      <button
        type='submit'
        className='form-tasks__btn'
      >
        <FontAwesomeIcon
          icon={faPlusSquare}
          className='form-tasks__icon-btn'
        />
      </button>
    </form>
  );
}

export default FormularioTareas;