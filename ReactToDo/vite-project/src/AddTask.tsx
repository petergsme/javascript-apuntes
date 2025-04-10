import { useState } from 'react';
import { Task } from './task-models';

interface AddTaskProps {
  tasksArray: Task[];
  setTasksArray: (tasks: Task[]) => void;
  // Funcion que acepta un listado de tareas y no retorna nada.
}

export const AddTask = (props: AddTaskProps) => {
  const [inputText, setInputText] = useState('');
  const { tasksArray, setTasksArray } = props;

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
