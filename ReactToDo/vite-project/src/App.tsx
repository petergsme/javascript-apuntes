import { useState } from "react";
import "./App.css";
import { AddTask } from "./AddTask";
import { Task } from "./task-models";

function App() {
  const [tasksArray, setTasksArray] = useState<Task[]>([]);
  // Esta es la manera de especificar un tipado en un useState.
  const [isOnlyPending, setIsOnlyPending] = useState(false);

  const handleDelete = (task: Task) => {
    setTasksArray(tasksArray.filter((tarea) => tarea.id !== task.id));
  };

  const toggleCompletedTask = (task: Task) => {
    setTasksArray(
      tasksArray.map((tarea) => (tarea.id === task.id ? { ...tarea, isCompleted: !tarea.isCompleted } : tarea))
    );
  };

  return (
    <>
      <AddTask />
      <div>
        <button className={isOnlyPending ? "pending" : ""} onClick={() => setIsOnlyPending(!isOnlyPending)}>
          Show Pending
        </button>
        <button>Show Completed</button>
      </div>
      <ul className="task-list">
        {tasksArray.map((task) => {
          if (isOnlyPending && task.isCompleted) {
            return;
          }

          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isCompleted} onClick={() => toggleCompletedTask(task)} />
              {task.taskName}
              <button onClick={() => handleDelete(task)}>eliminar tarea</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/*
mostrar tareas sin completar.
filter tareas donde .iscompleted sea false.
set al array, pero eso provoca que pierdas todas las demas. ya no las tienes en ningun sitio.
como hago para poder restaurarlas.puedo añadir una propiedad para mostrarlas u ocultarlas y con un map establecer su visibilidad.

entonces:

añado una propiedad a mis tareas, visible.
creo un filtertareas
ejecuta un map en su set que toma las tareas y en base a si completed las pone visibles o invisibles.
añado una condicion de renderizado en mi map para que si una tarea es invisible no la renderice.

o mejor
basalo en el boton.
crea un usestate para ver si el boton esta pulsado.
en base a si esta pulsado que el map muestre las tareas completadas o no completadas.
NO TE OLVIDES NUNCA DE LOS USESTATE. SON LA CLAVE PARA LA MAYORIA DE COSAS, SI TIENES QUE GUARDAR, CAMBIAR ALGO...

CUIDADO CON DESMIGAJAR EL PROBLEMA SIN ENTENDERLO. INTENTA PRIMERO ENTENDER QUE TIENE QUE HACER Y EN BASE A ESO VER SI NECESITAS O NO UN USESTATE Y DESDE AHÍ YA PUEDES TRABAJAR.
*/

export default App;
