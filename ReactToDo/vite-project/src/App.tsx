import { useState } from "react";
import "./App.css";

interface Task {
  taskName: string;
  isCompleted: boolean;
  id: number;
}

function App() {
  const [tasksArray, setTasksArray] = useState<Task[]>([]);
  // Esta es la manera de especificar un tipado en un useState.
  const [inputText, setInputText] = useState("");

  const addTask = (text: string) =>
    setTasksArray([
      ...tasksArray,
      {
        taskName: text,
        isCompleted: true,
        id: Date.now(),
      },
    ]);

  const handleDelete = (task: Task) => {
    setTasksArray(tasksArray.filter((tarea) => tarea.id !== task.id));
  };

  const handleCompleted = (task: Task) => {
    setTasksArray(
      tasksArray.map((tarea) => (tarea.id === task.id ? { ...tarea, isCompleted: !tarea.isCompleted } : tarea))
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputText}
          placeholder="Escribe una tarea"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)}
        />
        {/* Hacer hover sobre el event te dice el event que jsx cree que le toca, sin tipado se rompe*/}
        <button disabled={!inputText ? true : false} onClick={() => addTask(inputText)}>
          Añadir tarea
        </button>
      </div>
      <ul className="task-list">
        {tasksArray.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isCompleted} onClick={() => handleCompleted(task)} />
              {task.taskName}
              <button onClick={() => handleDelete(task)}>eliminar tarea</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
