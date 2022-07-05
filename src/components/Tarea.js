import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {

  // Estado para editar la tarea:
  const [editandoTarea, cambiarEditandoTarea] = useState(false);

  // Estado para editar el input:
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

  // Le agregamos al formulario este evento de enviar:onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    cambiarEditandoTarea(false);

  }

  return (
    <li className='list-tasks__task'>
      <FontAwesomeIcon icon={tarea.completada ? faCheckSquare : faSquare}
        className='list-tasks__icon list-tasks__icon-check'
        onClick={() => { toggleCompletada(tarea.id) }}
      />

      <div className='list-tasks__text'>
        {editandoTarea ?
          <form action="" className='form-edit-task' onSubmit={handleSubmit}>
            <input
              type="text"
              className='form-edit-task__input'
              value={nuevaTarea}
              onChange={(e) => {
                cambiarNuevaTarea(e.target.value);
              }}

            />
            <button className='form-edit-task__btn' type='submit'>Actualizar</button>

          </form>
          :
          tarea.texto
        }
      </div>

      <div className='list-tasks__container-buttons'>
        <FontAwesomeIcon
          icon={faEdit}
          className='list-tasks__icon list-tasks__icon-action'
          onClick={() => { cambiarEditandoTarea(!editandoTarea) }}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className='list-tasks__icon list-tasks__icon-action'
          onClick={() => { borrarTarea(tarea.id) }}
        />
      </div>
    </li>
  );
}

export default Tarea;