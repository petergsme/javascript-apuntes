import "./App.css";
import { useState } from "react";

// EJERCICIO: Boton añade tareas, conforme le des al boton vaya sumando, añadiendo tareas a un array.

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const handleAddTask = () => {
    setTasksArray([...tasksArray, `Tarea ${tasksArray.length + 1}`]);
  };

  return (
    <div>
      <button onClick={handleAddTask}>Add task</button>
      <p>Tareas creadas: {tasksArray.length}</p>
    </div>
  );
}

/*Esto es un componente de react. Un componente es una función que devuelve código similar al html. Todo el código html debe estar agrupado dentro de una etiqueta, puede ser algo semantico o estar vacío como en este caso.

Otras diferencias con el html básico.

aquí class es className
El html puede llevar variables de javascript con llaves en lugar de la parafernalia que haciamos antes.

*/
export default App;
