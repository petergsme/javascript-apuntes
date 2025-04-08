import { useState } from "react";
import { Task } from "./task-models";

interface AddTaskProps {
  tasks: Task<[]>;
}

export const AddTask = () => {
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

  return (
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
  );
};
