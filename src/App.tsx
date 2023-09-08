import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MantineProvider } from "@mantine/core";
import HeaderShell from "./AppShell";

export default function App(): JSX.Element {
  type Task = {
    task: string;
    id: string;
    completed: boolean;
    time: Date;
  };
  const id: string = uuidv4();
  // const getTime = () => new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [todos, setTodos] = useState<Task[]>([]);
  type idFunc = (id: string) => void;

  const removeTodo: idFunc = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (value: string): void => {
    const found = todos.find((todo) => todo.task === value);
    if (!found) {
      setCurrentTime(new Date());
      const todo: Task = {
        task: value,
        id: id,
        completed: false,
        time: currentTime,
      };
      const newTodos: Task[] = [todo, ...todos];
      setTodos(newTodos);
    }
  };

  const handleToggle: idFunc = (id) => {
    setCurrentTime(new Date());
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              time: currentTime,
            }
          : todo
      )
    );
  };
  const editTodo = (id: string, value: string) => {
    if (value) {
      setCurrentTime(new Date());
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: value, time: currentTime } : todo
        )
      );
    }
  };

  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <HeaderShell
        addTodo={addTodo}
        todos={todos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        handleToggle={handleToggle}
      />
    </MantineProvider>
  );
}
