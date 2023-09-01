import { Container, Group, Text, TextInput, Space } from "@mantine/core";
import { FormEvent } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Todowrapper(): JSX.Element {
  const id: string = uuid();
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<object[]>([]);

  interface Task {
    task: string;
    id: string;
    completed: boolean;
  }

  const addTodo = (value: string): void => {
    const todo: Task = {
      task: value,
      id: id,
      completed: false,
    };
    const newTodos: object[] = [todo, ...todos];
    setTodos(newTodos);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <Container size={550} my={40}>
      <Group position="center">
        <Text color="grape" fz={28} fw="bold">
          MY TODO APP
        </Text>
      </Group>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Start writing tasks......"
          label="Add Todo"
          size="lg"
          value={value}
          radius="md"
          withAsterisk
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <Space h="xl" />
    </Container>
  );
}
