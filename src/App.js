import React, { useState } from 'react';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';
import './App.css';

const App = () => {

  // Creamos un estado inicial que tendra nuestras tareas: Un Arrays vacio:
  const [tareas, cambiarTareas] = useState([]);

  console.log(tareas);

  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;
