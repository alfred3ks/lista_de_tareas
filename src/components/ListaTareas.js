import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarTareas }) => {

  // Creamos la funcion para editar el input de la tarea, el checkbox:
  const toggleCompletada = (id) => {

    cambiarTareas(
      tareas.map(
        (tarea) => {
          if (tarea.id === id) {
            return { ...tarea, completada: !tarea.completada }
          } else {
            return tarea;
          }
        }
      )
    )
  }

  return (
    <ul className='list-tasks'>
      {
        tareas.length > 0
          ?
          tareas.map((tarea) => {
            return <Tarea key={tarea.id} tarea={tarea} toggleCompletada={toggleCompletada} />
          })
          :
          <div className='list-tasks__msj'>~ No hay tareas agregadas ~</div>
      }
    </ul>
  );
}

export default ListaTareas;