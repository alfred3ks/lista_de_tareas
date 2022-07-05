import React, { useState } from 'react';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';
import './App.css';

const App = () => {

  // Creamos un estado inicial que tendra nuestras tareas: Un Arrays vacio:
  const [tareas, cambiarTareas] = useState([

    { id: 1, texto: 'Lavar la ropa', completada: false },
    { id: 2, texto: 'Grabar', completada: true },

  ]);

  console.log(tareas);

  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
}

export default App;
