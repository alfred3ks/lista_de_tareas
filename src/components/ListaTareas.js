/* eslint-disable array-callback-return */
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

  // Funcion para editar la tarea:
  const editarTarea = (id, nuevoTexto) => {

    cambiarTareas(
      tareas.map(
        (tarea) => {
          if (tarea.id === id) {
            return { ...tarea, texto: nuevoTexto }
          } else {
            return tarea;
          }
        }
      )
    )
  }

  // Funcion para borrar la tarea:
  const borrarTarea = (id) => {
    cambiarTareas(tareas.filter((tarea) => {
      if (tarea.id !== id) {
        return tarea;
      }
      return;
    }));
  }

  return (
    <ul className='list-tasks'>
      {
        tareas.length > 0
          ?
          tareas.map((tarea) => {
            return <Tarea
              key={tarea.id}
              tarea={tarea}
              toggleCompletada={toggleCompletada}
              editarTarea={editarTarea}
              borrarTarea={borrarTarea}
            />
          })
          :
          <div className='list-tasks__msj'>~ No hay tareas agregadas ~</div>
      }
    </ul>
  );
}

export default ListaTareas;