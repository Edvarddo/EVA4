import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState(["Comprar comida de perro","Leer un libro","Preparar algo para comer"]);

  const añadirTarea = () => {
    if(tarea.trim()===''){
      alert("Escribe una tarea!!")
    }else{
    console.log(typeof tarea )
    setTareas([...tareas, tarea]);
    setTarea('');
    };

  
    
  };
  const eliminarTarea = (index) => {
    const tareasActuales = [...tareas];
    tareasActuales.splice(index, 1);
    setTareas(tareasActuales);
    
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h1 className="text-center mb-4">Tareas por hacer</h1>
          <div className="mb-3">
            <label htmlFor="tarea" className="form-label">Nombre tarea:</label>
            <input
              type="text"
              className="form-control"
              id="tarea"
              value={tarea}
              onChange={(evento) => setTarea(evento.target.value)}
            />
          </div>
          <div className="col-md-3"></div>
          <button className="btn btn-primary" onClick={añadirTarea}>Añadir tarea</button>
        </div>
        
        <div className="col-md-4"></div>

        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h1 className="text-center mb-4">Tareas agregadas</h1>
          <ul className="list-group">
            {tareas.map((tarea, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {tarea}
                <button className="btn btn-danger btn-sm" onClick={() => eliminarTarea(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default TodoList;