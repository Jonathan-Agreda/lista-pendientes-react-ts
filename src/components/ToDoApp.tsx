import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const ToDoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddtask = () => {
    if(nuevaTarea.trim() === '') return
    //setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setListaTareas([...listaTareas, nuevaTarea])
    setNuevaTarea('')
  }

  const handleBorrarTarea = (index:number) => {
    setListaTareas(listaTareas.filter((_, i) => i !== index))
    //setListaTareas(tareas => tareas.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input 
          type="text" 
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddtask}>Agregar Tarea ➕</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}/>
    </div>
  );
};
