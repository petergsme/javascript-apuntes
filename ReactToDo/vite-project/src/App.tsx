import { useState } from 'react';
import './App.css';

interface Task {
  taskName: string;
  isCompleted: boolean;
}

function App() {
  const [tasksArray, setTasksArray] = useState<Task[]>([]);
  // Esta es la manera de especificar un tipado en un useState.
  const [inputText, setInputText] = useState('Escribe una tarea');

  const handleClick = (text: string) =>
    setTasksArray([
      ...tasksArray,
      {
        taskName: text,
        isCompleted: true,
      },
    ]);

  const handleDelete = (task: Task) => {
    setTasksArray(tasksArray.filter((tarea) => tarea.taskName !== task.taskName));
  };

  const handleCompleted = (task: Task) => {
    setTasksArray(
      tasksArray.map((tarea) =>
        tarea.taskName === task.taskName ? { ...tarea, isCompleted: !tarea.isCompleted } : tarea
      )
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)}
        />
        {/* Hacer hover sobre el event te dice el event que jsx cree que le toca, sin tipado se rompe*/}
        <button onClick={() => handleClick(inputText)}>Añadir tarea</button>
      </div>
      <ul className="task-list">
        {tasksArray.map((task) => {
          return (
            <li key={task.taskName}>
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
