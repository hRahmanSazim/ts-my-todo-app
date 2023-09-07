import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import HeaderShell from "./AppShell";

export default function App(): JSX.Element {
  type Task = {
    task: string;
    id: string;
    completed: boolean;
  };
  const id: string = uuidv4();

  const [todos, setTodos] = useState<Task[]>([]);

  type idFunc = (id: string) => void;

  const removeTodo: idFunc = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (value: string): void => {
    const todo: Task = {
      task: value,
      id: id,
      completed: false,
    };
    const newTodos: Task[] = [todo, ...todos];
    setTodos(newTodos);
  };

  const handleToggle: idFunc = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  const editTodo = (id: string, value: string) => {
    // const newtodo: string | null = prompt("Enter new todo....");
    if (value) {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, task: value } : todo))
      );
    }
  };

  // interface HeaderSimpleProps {
  //   links: { link: string; label: string }[];
  // }
  // const header: HeaderSimpleProps = {
  //   links: [{ link: "htttp://google.com", label: "" }],
  // };
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
      <ModalsProvider>{/* <Text>Welcome to Mantine!</Text> */}</ModalsProvider>
    </MantineProvider>
  );
}
