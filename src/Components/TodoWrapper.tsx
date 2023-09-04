import { Container, Group, Text, TextInput, Space } from "@mantine/core";
import { FormEvent } from "react";
import { useState } from "react";

type addFunc = {
  addTodo: (value: string) => void;
};

export default function Todowrapper({ addTodo }: addFunc): JSX.Element {
  const [value, setValue] = useState<string>("");

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
