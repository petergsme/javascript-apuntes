import { useState } from "react";
import "./App.css";

interface Task {
  taskName: string;
  isCompleted: boolean;
}

function App() {
  const [tasksArray, setTasksArray] = useState<Task[]>([
    {
      taskName: "Cepillar los dientes",
      isCompleted: true,
    },
  ]);

  const singleTask: Task = ({ taskName, isCompleted = false }) => {
    return (
      <li>
        <input type="checkbox" checked={isCompleted} />
        {taskName}
        <button>eliminar tarea</button>
      </li>
    );
  };

  console.log(tasksArray);
  console.log(setTasksArray([...tasksArray]));

  return (
    <>
      <div>
        <input type="text" />
        <button>Añadir tarea</button>
      </div>
      <ul className="task-list">{singleTask("Julian", false)}</ul>
    </>
  );
}

export default App;
