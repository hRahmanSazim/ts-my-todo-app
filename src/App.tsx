import { Box, Flex } from "@mantine/core";
import TodoWrapper from "./Components/TodoWrapper";
import { useState } from "react";
import Todo from "./Components/Todo";
import { v4 as uuidv4 } from "uuid";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "./HeaderSimple";

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

  const editTodo: idFunc = (id) => {
    const newtodo: string | null = prompt("Enter new todo....");
    if (newtodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: newtodo } : todo
        )
      );
    }
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

  interface HeaderSimpleProps {
    links: { link: string; label: string }[];
  }
  const header: HeaderSimpleProps = {
    links: [{ link: "htttp://google.com", label: "" }],
  };
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <Text>Welcome to Mantine!</Text> */}
      <HeaderSimple links={[header]} />
      <Box>
        <Flex direction="column" gap="xl" color="yellow">
          <TodoWrapper addTodo={addTodo} />
          {todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                handleToggle={handleToggle}
              />
            );
          })}
        </Flex>
      </Box>
    </MantineProvider>
  );
}
