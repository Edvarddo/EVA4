import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const listaEjemplo=[
  {
    id:1,
    nombre:"Jugar"
  },
  {
    id:2,
    nombre:"Jugar2"
  },
  {
    id:3,
    nombre:"Jugar3"
  }
]




const Tareas=()=>{
  const [tareas, setTareas]=useState()
  const [nombreTarea, setNombreTarea]= useState("")
  const handelAddTask=(evento)=>{
    console.log(evento.target.value)
    setNombreTarea(evento.target.value)
  }
  const handleAddTaskBtn=(evento)=>{
    if(nombreTarea ===""){
      alert("Debes escribir una tarea")
    }
    let tareaNueva={
      id:tarea.length+1,
      nombre:nombreTarea
      
    }
    setTareas([...tareas],tareaNueva)
    setNombreTarea("")

  }
  return(
    <div>
      <h1>Tareas</h1>
      <ul>
        {
          listaEjemplo.map((tarea)=>{
             return (<li>{tarea.nombre}</li>)
          })
        }
      </ul>
    </div>
  )
}

export default Tareas