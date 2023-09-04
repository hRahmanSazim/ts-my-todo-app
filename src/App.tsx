import { Box, Flex } from "@mantine/core";
import TodoWrapper from "./Components/TodoWrapper";
import { useState } from "react";
import Todo from "./Components/Todo";
import { v4 as uuidv4 } from "uuid";

export default function App(): JSX.Element {
  type Task = {
    task: string;
    id: string;
    completed: boolean;
  };
  const id: string = uuidv4();

  const [todos, setTodos] = useState<Task[]>([]);

  type myFunction = (id: string) => void;

  const removeTodo: myFunction = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo: myFunction = (id) => {
    const newtodo: string = prompt("Enter new todo....");
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newtodo } : todo))
    );
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

  return (
    <Box>
      <Flex direction="column" gap="xl" color="yellow">
        <TodoWrapper addTodo={addTodo} />
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
