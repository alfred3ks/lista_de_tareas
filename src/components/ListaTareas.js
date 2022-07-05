import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas }) => {
  return (
    <ul className='list-tasks'>
      {
        tareas.length > 0
          ?
          tareas.map((tarea) => {
            return <Tarea key={tarea.id} tarea={tarea} />
          })
          :
          <div className='list-tasks__msj'>~ No hay tareas agregadas ~</div>
      }
    </ul>
  );
}

export default ListaTareas;